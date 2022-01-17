const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const app = express();
const PORT = process.env.PORT || 5000;
const router = require('./router');
const { callbackify } = require('util');

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('we have a new connection');
    socket.on('join', ({ name, room }) => {
        console.log(name, room);
        const error=true;
        if(error){
            callback({error:'error'});
        }
     
    })
    socket.on('disconnect', () => {
        console.log('User had left!!');
    })
})
app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
