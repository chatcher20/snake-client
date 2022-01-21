// This will serve as your main file through which you will launch the game client.

// const net = require("net");

// Moved connect function to client.js
// Need to export it from client.js to use it here in play.js

const { connect } = require("./client");

console.log("Connecting ...");
// connect();

// setup interface to handle user input from stdin
const { setupInput } = require("./input");

// Now call setupInput from within play.js
setupInput(connect());     // Update play.js to pass the object returned from connect into the setupInput function.

