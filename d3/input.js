let connection;

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = (data) => {
  if (data === "\x03") {
    process.exit();
  } else if (data === "w") {
    console.log("up")
  } else if (data === "s") {
    console.log("down")    
  } else if (data === "a") {
    console.log("left")
  } else if (data === "d") {
    console.log("right")
  }
};

module.exports = { setupInput } ;