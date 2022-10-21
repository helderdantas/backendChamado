'use strict';

const sequelize = require("sequelize");
// MIGRATION PARA CRIAR A TABELA NO BANCO DE DADOS
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Chamados', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoInclemente: true,
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("nextval('id_seq_chamados')"), //PARA CRIAR A SEQUENCIA DE ID NO BANCO POSTGRES
      },
      aberto: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      setor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subSetor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      equipamentoComDefeito: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      equipamentoTombo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      equipeSuport: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: true,
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
    return queryInterface.dropTable('Chamados');

  }
};