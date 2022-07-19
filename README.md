# chatroom-exercise

I'm not really going to pu all the code in here sinds alot o steps were already provided for us 
but the little personalised code i have i will post

_________

our instructions were clear: make a basic chatroom

____
my html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joe Mama's Chat</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Joe Mama's Chat</h1>
    <label for="inputChat">CHAT</label>
    <input id="inputChat" type="text" name="inputChat" placeholder="type your message">
    <button id="2ALL">2 ALL</button>
    <button id="2ME">2 ME</button>
    <div id="target"></div>
<script src="/socket.io/socket.io.js"></script>
<script src="script.js"></script>
</body>
</html>
```
my script
```js
// defining socket
let socket = io.connect();
let messageBox = document.getElementById('inputChat');
let toAll = document.getElementById('2ALL');
let toMe = document.getElementById('2ME');
let target  = document.getElementById('target');
//button logic
toAll.addEventListener('click',()=>{
    socket.emit('sendToAll', (messageBox.value));
    console.log(messageBox.value);
});

//receiving 
socket.on('displayMessage', (message) => {
    target.innerHTML += '<br>'+message;
});
```

up until this point u connected with server and made it interactive on connection. 
I implemented the button and the input so that it pushed the message to the server.
the server catches it and sends it back at the client in html format. (send to all) 
