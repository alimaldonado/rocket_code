import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await server.listen();
  console.log("Server running at: ", url);
}

startServer();
