const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on ("data", (data) => {
    console.log(data);
  });

  // let interval;

  conn.on("connect", (data) => {
    console.log("YAYYYYYYY GOT IN");
    conn.write("Name: LN");
    // interval = setInterval(() => {
    //   conn.write("Move: up")
    // }, 500);
  })

  // conn.on('error', () => {
  //   console.log("goodbye");
  //   clearTimeout(interval);
  // })
  return conn;
}

module.exports = { connect };