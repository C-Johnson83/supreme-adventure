const { User, Gift, Item } = require("../models");

const resolvers = {
  Query: {
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
    addItemToList: async (_, { listId, name, link, quantity, note }) => {
      try {
        const list = await Gift.findById(listId);
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

    deleteItemFromList: async (_, { listId, itemId }) => {
      try {
        const list = await Gift.findById(listId);
        if (!list) {
          throw new Error('List not found');
        }
        const itemIndex = list.items.findIndex(item => item._id.toString() === itemId);
        if (itemIndex === -1) {
          throw new Error('Item not found in list');
        }
        const deletedItem = list.items[itemIndex];
        list.items.splice(itemIndex, 1);
        await list.save();
        return deletedItem;
      } catch (error) {
        throw new Error(`Failed to delete item from list: ${error.message}`);
      }
    },

    updateItemInList: async (_, { itemId, name, link, quantity, quantityBought, note }) => {
      try {
        const item = await Item.findByIdAndUpdate(itemId, { name, link, quantity, quantityBought, note }, { new: true });
        if (!item) {
          throw new Error('Item not found');
        }
        return item;
      } catch (error) {
        throw new Error(`Failed to update item in list: ${error.message}`);
      }
    }

  }
};

module.exports = resolvers;
