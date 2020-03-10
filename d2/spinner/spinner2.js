process.stdout.write("hello from spinner2.js... \ryoooo\n");
const spinnerama = "|/-\\";
let timeout = 0;
const interval = 200;
for (let i = 0; i < 2; i++) {
  for (const char of spinnerama) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, timeout += interval);
  }
}
setTimeout(() => {
  process.stdout.write("\n");
}, timeout);
console.log("Done queueing up timeouts.");