$(function(){

    //socket library
    let socket = io();

    $('form').submit((e) => {
        e.preventDefault();
        socket.emit('chat message', $('#chat-msg').val());

        $('#chat-msg').val('');
        return false;
    });

    // receive
    socket.on('chat message', (msg) => {
        $('#messages').append($('<li class="bg-info text-light mb-2 pl-2">').text(msg));

        window.scrollTo(0, document.body.scrollHeight);
    });
});