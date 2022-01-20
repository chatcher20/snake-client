// This will serve as your main file through which you will launch the game client.




const net = require("net");


// Moved connect function to client.js
// Need to export it from client.js to use it here in play.js


const {connect} = require("./client.js");





console.log("Connecting ...");
const connection = connect();

// connection.on("connect", () => {
//   console.log("Testing 123");
// });