// defining socket
let socket = io.connect();
let messageBox = document.getElementById("inputChat");
let toAll = document.getElementById("2ALL");
let toMe = document.getElementById("2ME");
let target = document.getElementById("target");
//button logic
toAll.addEventListener("click", () => {
  socket.emit("sendToAll", messageBox.value);
  console.log(messageBox.value);
});

//receiving
socket.on("displayMessage", (message) => {
  target.innerHTML += "<br>" + message;
});
