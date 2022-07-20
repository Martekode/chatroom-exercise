const express = require('express');
const http = require('http');
let counter = 0;
//requires above
//defining application
const app = express();
//path to our client
const clientPath = `${__dirname}/../client`;
//use xpress to host the client
app.use(express.static(clientPath));
// use http to serve the app that express provides
const server = http.createServer(app);
server.listen(8080, () => {
    console.log("server running on" + 8080);
});
const io = require('socket.io')(server);
//connection from client to server
io.on('connection', (socket) => {
    counter++;
    console.log(counter + ' someone connected');
    socket.on('sendToAll', (data) =>{
        //console.log(message);
        io.emit("displayMessage", (data));
    });
    socket.on('sendToMe', (data) =>{
        // console.log(message);
        socket.emit("displayMessage", (data));
    });
});
// io.on('disconnect', () =>{
//     counter--;
//     console.log(counter + " connected");
// })




