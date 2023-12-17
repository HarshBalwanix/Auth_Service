# Auth_Service

A simple Express.js server starter template with Sequelize ORM for managing databases. This template includes routes, models, and configurations for quick and easy development.

## Features

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Sequelize**: A promise-based Node.js ORM for PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- **Body-parser**: Parse incoming request bodies in a middleware before handlers.

## Getting Started

1. Install dependencies:
    ```bash
    npm install
    ```

2. Configure your database settings in `./config/serverconfig.js` and `./config/config.json`.

3. Run the server:
    ```bash
    npm start
    ```

4. Explore API routes at `http://localhost:{PORT}/api`.

## Tech Stack:
- Express.js
- Sequelize
- Body-parser

## Configuration

- Database settings can be configured in `./config/serverconfig.js` and `./config/config.json`.
- Adjust the routes in `./routes/index.js` to fit your application's needs.

## Development

For development purposes, you can use the Sequelize sync function. Uncomment the relevant code in `./index.js`:

```javascript
// Uncomment the following lines if you want Sequelize to sync the database on server start
// if (process.env.DB_SYNC) {
//     db.sequelize.sync({ alter: true });
// }
