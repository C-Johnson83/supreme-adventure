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
    }




    // deleteItemFromList: async (_, { listId, itemId }) => {
    //     try {
    //       const list = await Item.findById(listId);
    //       if (!list) {
    //         throw new Error('List not found');
    //       }
    //       const itemIndex = list.items.findIndex(item => item._id.toString() === itemId);
    //       if (itemIndex === -1) {
    //         throw new Error('Item not found in list');
    //       }
    //       const deletedItem = list.items[itemIndex];
    //       list.items.splice(itemIndex, 1);
    //       await list.save();
    //       return deletedItem;
    //     } catch (error) {
    //       throw new Error(`Failed to delete item from list: ${error.message}`);
    //     }
    //   },

    //     updateItemInList: async (_, { itemId, name, link, quantity, quantityBought, note }) => {
    //       try {
    //         const item = await Item.findByIdAndUpdate(itemId, { name, link, quantity, quantityBought, note }, { new: true });
    //         if (!item) {
    //           throw new Error('Item not found');
    //         }
    //         return item;
    //       } catch (error) {
    //         throw new Error(`Failed to update item in list: ${error.message}`);
    //       }
    //     }

    // }
  }
}
module.exports = resolvers;
