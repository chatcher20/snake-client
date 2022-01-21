
// Stores the active TCP connection object.
let connection; // In the input module, create a variable in the outer-most scope called connection, which can default to undefined. connection should be in the outer-most scope so that it can be used by all functions in this module.

// setup interface to handle user input from stdin
const setupInput = function (conn) {                  // Update the setupInput() function to accept a single parameter and assign its value to the connection variable.
  connection = conn;
  // You just changed setupInput() to accept an object that lets you interact with the server. The connect() function you wrote earlier returns just such an object!
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key)); //event listener for stdin. Runs a funcion called handleUserInput when you receive input from your keyboard.
  return stdin;
};
// the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.

const handleUserInput = function (key) {
  // here you'll specify what happens when "data:" is received from stdin... in other words, what happens when a particular key is pressed on the keyboard input.
  // if we get a `ctrl+c` input, terminate the game.
  switch (key.toLowerCase()) {
    case ('\u0003'):
      process.exit();
    case ('w'):
      connection.write("Move: Up")
        break;
    case ('a'):
      connection.write('Move: Left')
        break;
    case ('s'):
      connection.write('Move: Down')
        break;
    case ('d'):
      connection.write('Move: Right')
        break;
    case ('t'):
      connection.write('Say: That all you got?!')
        break;
    case ('g'):
      connection.write('Say: God, you\'re sssslow!')
        break;
  }
};

module.exports = {
  setupInput,
};
// Note: We have to export setupInput but not handleUserInput.
// Because: handleUserInput is only called by setupInput which 
// is already in the same file. Since handleUserInput does not 
// need to be called or referenced elsewhere, it does not need 
// to be exported from the input module.

