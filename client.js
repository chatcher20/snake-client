// establishes a connection with the game server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({                 // You used Node's net library (specifically, the createConnection function) to create an object named conn in the code above.
    host: '165.227.47.243',   // IP address here,        
    port: '50541',            // PORT number here,
  });

  console.log("connected to server");
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data.toString());
    console.log("Flames rule");
    conn.end();
  });

  return conn;
  // The conn object that Node returned to you represents the connection that you have with the server.
  // The conn object is full of useful methods and properties that can now be used to interact with the server!
};

console.log("Connecting ...");



// fileA.js
// export the connect function

module.exports = {
  connect
};

