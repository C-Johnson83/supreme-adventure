const { User, Item, List } = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        
        const userData = await User.findOne({ _id: context.user._id }).populate('lists').select('-__v -password');

        return userData;
      }

      throw AuthenticationError;
    },


    user: async (_, { _id }) => {
      try {
        const user = await User.findById(_id).select("-password");
        return user;
      } catch (error) {
        throw new Error(`Failed to fetch user: ${error.message}`);
      }
    },

    getListById: async (_, { id }) => {
      try {
        
        const list = await List.findById(id).select('-__v');

        return list;
      } catch (error) {
      throw AuthenticationError;
    }},

    getListByAccessCode: async (_, { accessCode }) => {
      
      try {
        const list = await List.findOne( {accessCode} ).select('-__v');
        if (!list) {
          throw new Error('List not found.');
        }
       
        return list;
      } catch (error) {
        throw new AuthenticationError('List not found.');
      }
    }
  
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },


    addItemToList: async (_, { id, title, description, link }) => {
     
      try {
        const list = await List.findById(id).select('-__v');
        if (!list) {
          throw new Error('List not found');
        }
        const newItem = { title, description, link };
        list.items.push(newItem);
        await list.save();
        return newItem;
      } catch (error) {
        throw new Error(`Failed to add item to list: ${error.message}`);
      }
    },
    
    addList: async (parent, args, context) => {
      try {

        if (!context.user) {
          throw new AuthenticationError("You must be logged in to add a list.");
        }

        const listData = await List.create(args);

        await User.findByIdAndUpdate(
          context.user._id,
          { $push: { lists: listData._id } },
          { new: true }
        );

        console.log("\nNew List Created\n", listData);

        return listData;
      } catch (error) {
        console.error("Error adding list:", error);
        throw new Error("Failed to add list. Please try again.");
      }
    },

        deleteList: async (_, { _id}, context) => {
          if (!context.user) {
            throw new AuthenticationError('You must be logged in to delete a list.');
          }
          try {
            const list = await List.findById(_id);
    
            if (!list) {
              throw new Error('List not found');
            }

            await list.deleteOne();
    
            console.log('List deleted successfully');

            return 'List deleted successfully';
          } catch (error) {
            console.error('Error deleting list:', error);
            throw new Error('Failed to delete list. Please try again.');
          }
        },

        deleteItemFromList: async (_, { _id }, context) => {
          if (!context.user) {
            throw new AuthenticationError('You must be logged in to delete an item.');
          }
          
          try {
            const list = await List.findOne({ "items._id": _id });
      
            if (!list) {
              throw new Error('List containing the item not found');
            }
      
            const itemIndex = list.items.findIndex(item => item._id.toString() === _id);
      
            if (itemIndex === -1) {
              throw new Error('Item not found in the list');
            }
      
            list.items.splice(itemIndex, 1);
            await list.save();
      
            console.log('Item deleted successfully');
      
            return 'Item deleted successfully';
          } catch (error) {
            console.error('Error deleting item:', error);
            throw new Error('Failed to delete item. Please try again.');
          }
        },

       
          updateItemPurchasedStatus: async (_, { _id, purchased }, context) => {
            if (!context.user) {
              throw new AuthenticationError('You must be logged in to update the purchased status.');
            }
            
            try {
              const list = await List.findOne({ "items._id": _id });
              if (!list) {
                throw new Error('List containing the item not found');
              }
              
              const item = list.items.find(item => item._id.toString() === _id);
              if (!item) {
                throw new Error('Item not found in the list');
              }
              
              item.purchased = purchased;
              await list.save();
              
              return 'Purchased status updated successfully';
            } catch (error) {
              console.error('Error updating purchased status:', error);
              throw new Error('Failed to update purchased status. Please try again.');
            }
          }
      
        
      }

      }

    


module.exports = resolvers;
