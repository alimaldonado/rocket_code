const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    firstName: String!
    middleName: String
    lastName: String!
    lastLastName: String
    birthDate: String
    email: String!
    phone: String!
  }
  type Query {
    getUsers: [User]!
  }
  type Mutation {
    saveUser(
      firstName: String!
      middleName: String
      lastName: String!
      lastLastName: String
      birthDate: String
      email: String!
      phone: String!
    ): User!
  }
`;

module.exports = typeDefs;
