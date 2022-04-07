const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs.js");
const resolvers = require("./graphql/resolvers.js");
const { sequelize } = require("./models");

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Database Connected!");
  } catch (error) {
    console.log(error);
  }
}

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await server.listen();
  console.log("Server running at: ", url);

  connectDB();
}

startServer();
