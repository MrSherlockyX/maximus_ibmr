// database.js
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,      // Nome do banco de dados
  process.env.DB_USER,      // Usuário do banco de dados
  process.env.DB_PASSWORD,  // Senha do banco de dados
  {
    host: process.env.DB_HOST,      // Host do banco de dados
    dialect: 'mysql',               // Dialeto do banco de dados
  }
);

module.exports = sequelize;
