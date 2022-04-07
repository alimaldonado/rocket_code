const typeDefs = `
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
`;

module.exports = typeDefs;
