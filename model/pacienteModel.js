/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize  = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');


const paciente = connection.define(
    'tbl_paciente',
    {
        nome_paciente:{
            type: sequelize.STRING,
            allowNull:false
        },

        telefone_paciente:{
            type: sequelize.STRING,
            allowNull:false
        },

        celular_paciente:{
            type: sequelize.STRING,
            allowNull:false
        },

        email_paciente:{
            type: sequelize.STRING,
            allowNull:false
        },

        foto:{
            type: sequelize.STRING,
            allowNull:false
        },

        nome_responsevel:{
            type: sequelize.STRING,
            allowNull:true
        },

        telefone_responsavel:{
            type: sequelize.STRING,
            allowNull:true
        }
    }

);


paciente.sync({force:true});

module.exports = paciente;