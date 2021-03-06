var socket = io();
socket.on('connect', function() {
  console.log('Connected to the server');

});

socket.on('disconnect', function (){
 console.log('User was disconnected');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}:  ${message.text}`);
  jQuery('#messages').append(li);
});


socket.emit('createMessage', {
  from: "Maggie",
  text: "Hello"

}, function (data) {
  console.log('Got it', data);
});


jQuery('#message-form').on('submit', function(e){
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function(){

  });
});
