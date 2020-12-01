const express = require('express');
const path = require('path');
const cors = require('cors');

require('dotenv').config();

//App de express
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
    
//Node server
const server = require('http').createServer(app);
module.exports.io= io = require('socket.io')(server);
require('./sockets/socket');

//Carpeta publica
const publicPath = path.resolve(__dirname, 'public');

app.use( express.static( publicPath ));

server.listen( process.env.PORT, ( err ) => {
    if ( err ) throw new Error(err);

    console.log(`Servidor corriendo en puerto 3000`);
})