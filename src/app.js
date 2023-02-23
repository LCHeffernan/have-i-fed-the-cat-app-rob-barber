const express = require('express');

const { Cat } = require('../src/models')

const app = express();

app.use(express.json());

module.exports = app;