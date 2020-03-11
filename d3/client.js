const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on ("data", (data) => {
    console.log(data);
  });
  conn.on("connect", (data) => {
    console.log("YAYYYYYYY GOT IN");
    conn.write("Name: LN");
  })
  return conn;
}

console.log('Connecting ...');
connect();