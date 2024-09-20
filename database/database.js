const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','Homer987@@',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;