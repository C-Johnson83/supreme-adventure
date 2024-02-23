const { User, Item, List } = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        console.log("query:me")
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

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
    addItemToList: async (_, { listId, name, link, quantity, note }) => {
      try {
        const list = await Item.findById(listId);
        if (!list) {
          throw new Error('List not found');
        }
        const newItem = new Item({ name, link, quantity, note });
        list.items.push(newItem);
        await list.save();
        return newItem;
      } catch (error) {
        throw new Error(`Failed to add item to list: ${error.message}`);
      }
    },

//    saveList: async (_, { username, accessCode, listType, listName, eventDate }) => {
    addList: async ( parent, args) => {
      console.log("addList")
      const listData = await List.create(args)
      console.log(listData)
      /*try {
        const list = await new List(username, accessCode, listType, listName, eventDate);
        await list.save();
        return list;
      } catch (error) {
        throw new Error(`Failed to add item to list: ${error.message}`);
      } */
      return { listData }
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
