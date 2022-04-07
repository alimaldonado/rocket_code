# Rocket Code Test 
## Requirements
- Node JS
- sequelize-cli if running migrations is desired. If you're using the required host for the test, the migrations should've been done.
## Backend
Backend is made with Node JS, Apollo Server for GraphQL queries and Sequilize for SQL connection. To start the server:

- copy the config.dist.json file to a local config.json file: `cp backend/config/config.dist.json backend/config/config.json`
- Add the required MySQL connection parameters (user, password, host, database)
- run the migrations only if not using the required host for the test:
- run the server `node index.js`
## Frontend
Frontend is made with React JS. Once you've started the server, simply run `npm run start` to initialize.
