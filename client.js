// establishes a connection with the game server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({                 // You used Node's net library (specifically, the createConnection function) to create an object named conn in the code above.
    host: 'localhost',   // IP address here,        
    port: '50541',            // PORT number here,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("You have connected to the game server!")
    conn.write("Name: CMH")
  });
  
  conn.on("data", (data) => {     // inside the connect function, use the .on method on our conn object to register a "connect" handler (a callback function)
    
    console.log("You are hilarious!");
    
  });

  return conn;
  // The conn object that Node returned to you represents the connection that you have with the server.
  // The conn object is full of useful methods and properties that can now be used to interact with the server!
};

// fileA.js
// export the connect function

module.exports = {
  connect
};


