const CatModel = require('./cats');

const Sequelize = require('sequelize');

const setUpDatabase = () => {
    const connection = new Sequelize("have-i-fed-the-cat-app", "root", "password", {
        host: "localhost",
        port: 3307,
        dialect: "postgres"
    })

    connection.sync({alter: true});

    return { cat };
}

module.exports = setUpDatabase();