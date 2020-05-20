let PORT = process.env.PORT || 3000;
let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let stream = require('./ws/stream');
let path = require('path');
let favicon = require('serve-favicon')


app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
});


io.of('/stream').on('connection', stream);

server.listen(3000);