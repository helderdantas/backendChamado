const dotenv = require('dotenv');
const cors =require('cors');
dotenv.config();

require('./src/database');
const express = require('express');
const chamadoRoutes = require('./src/routes/chamadoRoutes');
const equipamentoRoutes = require('./src/routes/equipamentoRoutes');
const equipeSuportRoutes = require('./src/routes/equipeSuportRoutes');

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/', chamadoRoutes);
    this.app.use('/equipamentos/', equipamentoRoutes);
    this.app.use('/equipesuport/', equipeSuportRoutes);
    this.app.use(cors());
  }
}

module.exports =  new App().app;
