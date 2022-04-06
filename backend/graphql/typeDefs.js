export const typeDefs = `
    type User {
        name: String!
        middleName: String!
        lastName: String!
        lastLastName: String
    }
    type Query {
        hello: String
    }
`;
