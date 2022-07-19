// defining socket
let socket = io.connect();
let messageBox = document.getElementById("inputChat");
let toAll = document.getElementById("2ALL");
let toMe = document.getElementById("2ME");
let target = document.getElementById("target");
let identifier = document.getElementById("identifier");
let initButton = document.getElementById("init");
let chatRoom = document.getElementById("chatroom");
// console.log(identifier);
let username;
let errorMessage = "ok";
//button logic
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
//passing data
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
//to me 
toMe.addEventListener("click", () => {
    //console.log(hello);
    socket.emit("sendToMe", messageBox.value);
    console.log(messageBox.value);
});

//receiving
socket.on("displayMessage", (data) => {
    target.innerHTML += "<br><span style='color:red;'>"+ data.username + ": </span>"+ data.message;
});
