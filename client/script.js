// defining socket
let socket = io.connect();
let messageBox = document.getElementById("inputChat");
let toAll = document.getElementById("2ALL");
let toMe = document.getElementById("2ME");
let target = document.getElementById("target");
let identifier = document.getElementById("identifier");
console.log(identifier);
let errorMessage = "ok";
//button logic
toAll.addEventListener("click", () =>{
    console.log(identifier);
    let username = identifier.value;
    console.log(username);
    if (!username){
        console.log("fill in your username!");
    }else{
        let data = {};
        data.message = messageBox.value;
        data.username = username;
        //console.log(data);
        socket.emit("sendToAll", data);
        //console.log(messageBox.value);
    }
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
