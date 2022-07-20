// defining socket
let socket = io.connect();
let messageBox = document.getElementById("inputChat");
let toAll = document.getElementById("2ALL");
let toMe = document.getElementById("2ME");
let target = document.getElementById("target");
let identifier = document.getElementById("identifier");
let initButton = document.getElementById("init");
let chatRoom = document.getElementById("chatroom");
let listTarget = document.getElementById('listTarget');
let errorTarget = document.getElementById('errorMessage');
// console.log(identifier);
let username;
//button logic
initButton.addEventListener("click", () => {
    if (!identifier.value){
        errorTarget.innerHTML = "fill in username";
    }else{
        username = identifier.value;
        chatRoom.style.display = "inherit";
        identifier.style.display = "none";
        initButton.style.display = "none";
        errorTarget.style.display ="none";
        socket.emit("sendToList", username);
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
    let data = {};
    data.message = messageBox.value
    socket.emit("sendToMe", data);
    console.log(data.message);
});

//receiving
socket.on("displayMessage", (data) => {
    if (data.username) {
        target.innerHTML += "<br><span style='color:red;'>"+ data.username + ": </span>"+ data.message;
    }else{
        target.innerHTML += "<br><span style='color:blue;'>"+ data.message + "</span>";
    }
});
socket.on("displayList", (usernames) => {
    if (listTarget.innerHTML === ""){
        usernames.forEach(usrname => {
            listTarget.innerHTML += "<br>" + usrname;
        });
    }else{
        listTarget.innerHTML += "<br>" + usernames[usernames.length - 1];
    }
   
})
