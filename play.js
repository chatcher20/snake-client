// This will serve as your main file through which you will launch the game client.

const net = require("net");

// Moved connect function to client.js
// Need to export it from client.js to use it here in play.js

const {connect} = require("./client.js");

console.log("Connecting ...");
const connection = connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //event listener for stdin. Runs a funcion called handleUserInput when you receive input from your keyboard.
  return stdin;
};
// the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.

const handleUserInput = function (key) {
  // here you'll specify what happens when "data:" is received from stdin... in other words, what happens when a particular key is pressed on the keyboard input.
  // if we get a `ctrl+c` input, terminate the game.
  if(key === '\u0003') {
    process.exit();
  }
};






// Now call setupInput from within play.js
setupInput();

