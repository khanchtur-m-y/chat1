function main() {
    var socket = io();
    /*
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display message', handleMessage);
    */
   socket.on("connect", function(){
    var pos = {
        x: 0,
        y: 0,
    }
    function setup(){
        createCanvas(800, 800);
        background("#acacac");
        fill("blue");
        frameRate(30);
    }

    function draw(){
        console.log("a");
        if(mouseIsPressed){
            pos.x = mouseX;
            pos.y = mouseY;
            socket.emit("send", pos);
        }
        socket.on("display", ellipse(data.x, data.y, 25, 25));
    }
});
} 

window.onload = main;
