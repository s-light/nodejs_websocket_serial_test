

// https://github.com/expressjs/serve-static#serve-files-with-vanilla-nodejs-http-server
// https://github.com/theturtle32/WebSocket-Node/tree/c91a6cb8f0cf896edf0d2d49faa0c9e0a9985172

const fs = require('fs');

const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')

const http = require('http');
const WebSocketServer = require('websocket').server;
const finalhandler = require('finalhandler')
const serveStatic = require('serve-static')



const port = new SerialPort('/dev/ttyUSB0', {
  baudRate: 19200
})

const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
parser.on('data', handle_serial_incoming)

function handle_serial_incoming(message) {
    message = message.trim()
    // console.log(message)
    if (connection) {
        connection.send(message)
    }
}

var connection = undefined;

// Serve up ui folder
var serve = serveStatic('../ui_test', { 'index': ['index.html', 'index.htm'] })


// https://www.npmjs.com/package/websocket
var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    serve(request, response, finalhandler(request, response))
});

server.listen(8082, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});

wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }

    // https://github.com/theturtle32/WebSocket-Node/issues/32#issuecomment-12082147
    console.log(request.requestedProtocols);
    // var connection = request.accept('echo-protocol', request.origin);
    connection = request.accept('', request.origin);
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', ws_on_message);
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});

function ws_on_message(message) {
    if (message.type === 'utf8') {
        let content = message.utf8Data.trim()
        if (! content.endsWith("\n")) {
            // add missing newline
            content += "\n"
        }
        console.log('Received Message: ' + content);
        // https://nodejs.dev/learn/writing-files-with-nodejs#append-to-a-file
        fs.appendFile('./server_db/all.csv', content, err => {
          if (err) {
            console.error(err)
            return
          }
          //done!
        })
        // connection.sendUTF(message.utf8Data);
    }
}
