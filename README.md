# Backend to management clients

In this project, we will be using Node.js as the backend and ExpressJs.

## Install

    $ git clone https://github.com/jlucianolzz/serverless-swapi
    $ cd serverless-swapi
    $ npm install

## Running Scripts DB

    CREATE TABLE `cliente` (
    `idCliente` int(0) NOT NULL AUTO_INCREMENT,
    `vNombre` varchar(50) ,
    `vApellido` varchar(50) ,
    `dFecNacimiento` date,
    PRIMARY KEY (`idCliente`)
    ) ENGINE = InnoDB

## Running the app

configure the environment variables in the ./.env file

    # CONFIG

    APP_SCHEME=""
    APP_DOMAIN=""
    APP_PORT=
    APP_FRONT=""

    # MYSQL

    DB_USER=""
    DB_PASSWORD=""
    DB_HOST=""
    DB_PORT=
    DB_NAME=""
    DB_CONNECTION_LIMIT=

Next run the following command:

    $ npm start

## Test

configure the environment variables in the ./test/setEnv.js file

    # MYSQL

    DB_USER=""
    DB_PASSWORD=""
    DB_HOST=""
    DB_PORT=
    DB_NAME=""
    DB_CONNECTION_LIMIT=

Next run the following command:

    $ npm test

## Documentation Open Api 3.0

The documentation is available at:

- ./openapi.json
- https://app.swaggerhub.com/apis/jlucianolzz/clients-nodejs/1.0.0
