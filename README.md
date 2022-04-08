# Rocket Code Test 
## Backend
Backend is made with Node JS, Apollo Server for GraphQL queries and Sequilize for SQL connection. To start the server:

- copy the config.dist.json file to a local config.json file: `cp backend/config/config.dist.json backend/config/config.json`
- Add the required MySQL connection parameters (user, password, host, database)
- run the server `node index.js`

## Database
The used queries for this project. It consists of the create users table query and it doesn't need to be run. By the time of delivery, the table should have been created.
## Frontend
Frontend is made with React JS. Once you've started the server, simply run `npm run start` to initialize. The server will be running on http://localhost:4000 and the React App is also configured to request to port 4000
