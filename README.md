# chatroom-exercise

I'm not really going to pu all the code in here sinds alot o steps were already provided for us 
but the little personalised code i have i will post

_________

our instructions were clear: make a basic chatroom

____
my html
```xml
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

_____________
After this i tried to implement a username.

```xml
        <label for="identifier"></label>
        <input id="identifier" name="identifier" type="text" placeholder="username">
        <button id="init">confirm username</button>
```
i added some input for the user to choose their username after they press it it should display the chatroom and not display the username inputfield and button.

```js
initButton.addEventListener("click", () => {
    if (!identifier.value){
        errorMessage = "fill in username";
    }else{
        username = identifier.value;
        chatRoom.style.display = "inherit";
        identifier.style.display = "none";
        initButton.style.display = "none";
    }
});
```
i then made it so it passes it to the server via an object called data:

```js
toAll.addEventListener("click", () =>{
    // console.log(identifier);
    // console.log(username);
        let data = {};
        data.message = messageBox.value;
        data.username = username;
        //console.log(data);
        socket.emit("sendToAll", data);
        //console.log(messageBox.value);
    
});
```
client side îîîî
```js
    socket.on('sendToAll', (data) =>{
        //console.log(message);
        io.emit("displayMessage", (data));
    });
```
server side îîîî


