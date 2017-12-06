const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;


var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User connected');

  socket.on('createMessage', (message) => {
    console.log('createmessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAT: new Date().getTime()
    });
  });



  socket.on('disconnet', () => {
    console.log('User was Disconnected');
  });
});


server.listen(port, ()=> {
  console.log(`Starting on ${port}`);
});
