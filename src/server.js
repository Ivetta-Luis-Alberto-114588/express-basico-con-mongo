const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes/main.routes');

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use('/api',mainRouter)


module.exports = server;
