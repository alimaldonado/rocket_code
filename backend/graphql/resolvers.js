const { User } = require("../models");

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    saveUser: async (_, args, context, info) => {
      try {
        const user = await User.create({
          ...args,
        });
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = resolvers;
