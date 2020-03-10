// Trio programmed by @d0ugr, @Linh095 and @BilliMorgan
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

////////////
// Event Handling for User Input
////////////

stdin.on("data", (key) => {
  const keyValue = Number(key);
  //how to exit using control C
  if (key === "\x03")  {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key.toLowerCase() === "b") {
    process.stdout.write("\x07");
  } else if (Number.isInteger(keyValue) && keyValue !== 0) {
    process.stdout.write(`Starting timer for ${keyValue} seconds \n`);
    setTimeout(() => {
      process.stdout.write(`\x07${keyValue} second timeout\n`);
    }, keyValue * 1000);
  } else {
    process.stdout.write("DO NOT PRESS THAT KEY\n");
  }
});

console.log("After callback");