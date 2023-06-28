/*IMPORTAÇÃO DO SEQUELIZE*/
const sequelize = require('sequelize');

const connection = new sequelize(
    'ponte_alta',
    'root',
    '',
    {
        host:'localhost',
        port:'3307',
        dialect:'mysql',
        timezone:'-03:00'
    }
);

module.exports = connection;