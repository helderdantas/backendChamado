'use strict';

const sequelize = require("sequelize");
// MIGRATION PARA CRIAR A TABELA NO BANCO DE DADOS
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Equipamentos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoInclemente: true,
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("nextval('id_seq_equipamentos')"), //PARA CRIAR A SEQUENCIA DE ID NO BANCO POSTGRES
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Equipamentos');

  }
};