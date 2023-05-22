const express = require('express');
const  path  = require('path');

const routers = express.Router();

routers.use(express.static(path.join('src/views')));

routers.get('/', (request,response)=>{
    response.send('index');
});

module.exports={routers};