const express = require('express');

const dotenv = require('dotenv');
const { routers } = require('./rota');
dotenv.config();

const servers = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

servers.use('/', routers);
servers.listen(PORT,  HOST, ()=>{
    console.log('SERVIDOR O-N-L-I-N-E');
});

module.exports={servers};