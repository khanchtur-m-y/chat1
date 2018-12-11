var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var pattern = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);
console.log("server listening on port 3000");

io.on('connection', function (socket) {
    //for (var i = 0; i < pattern.length / 2; i += 2){
    //  io.sockets.emit("display", pattern[i]);
    // io.sockets.emit("display", pattern[i + 1]);
    //}
    io.sockets.emit("start");
    socket.on("send", function (data) {
        pattern.push(data.x);
        pattern.push(data.y);
        io.sockets.emit("display", data);
    });
 });
 