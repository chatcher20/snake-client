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

module.exports = {
  setupInput,
};
// Note: We have to export setupInput but not handleUserInput.
// Because: handleUserInput is only called by setupInput which 
// is already in the same file. Since handleUserInput does not 
// need to be called or referenced elsewhere, it does not need 
// to be exported from the input module.

