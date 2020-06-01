var debug = require('debug')('node:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8081');

const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("Uygulama başarılı ayağa kalktı 2");
})

app.listen(port, () =>{
    console.log("Superrrr oldumuki");
    console.log("Bence Oldu");
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }