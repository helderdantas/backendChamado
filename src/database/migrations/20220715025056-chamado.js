'use strict';

const sequelize = require("sequelize");
// MIGRATION PARA CRIAR A TABELA NO BANCO DE DADOS
module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('CREATE SEQUENCE id_seq_chamados start 1 increment 1');
    await queryInterface.createTable('Chamados', {
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
      subsetor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ilha: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      estacaotrabalho: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      equipamentocomdefeito: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      equipamentotombo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      equipamentonumeroserie: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      equipesuport: {
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

  async down(queryInterface) {
    await queryInterface.sequelize.query('DROP SEQUENCE id_seq_chamados');
    await queryInterface.dropTable('Chamados');
  },

 
};