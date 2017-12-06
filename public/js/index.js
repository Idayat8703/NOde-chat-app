var socket = io();
socket.on('connect', function() {
  console.log('Connected to the server');

});

socket.on('disconnect', function (){
 console.log('User was disconnected');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
