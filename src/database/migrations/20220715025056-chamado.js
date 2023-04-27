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
      subSetor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ilha: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      baia: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cputombo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpunumeroserie: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      monitor1tombo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      monitor1numeroserie: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      monitor2tombo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      monitor2numeroserie: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      impressora: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
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

  async down(queryInterface) {
    await queryInterface.sequelize.query('DROP SEQUENCE id_seq_chamados');
    await queryInterface.dropTable('chamados');
  },

 
};