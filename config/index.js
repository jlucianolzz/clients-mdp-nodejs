require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  appScheme: process.env.APP_SCHEME,
  appPort: process.env.APP_PORT,
  appFront: process.env.APP_FRONT,
  appDomain: process.env.APP_DOMAIN,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbConnectionLimit: process.env.DB_CONNECTION_LIMIT,
};

module.exports = { config };
