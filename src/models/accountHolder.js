const Sequelize = require('sequelize');
const database = require('../db');

const Correntista = database.define('correntista',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    banco: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    agencia: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    digitoAgencia: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contaDigito: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    titularConta: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Correntista;