const sentence = "hello there from lighthouse labs";



// sentence.split("").forEach(element => {
//   setTimeout (() =>   process.stdout.write(element), 1000
//   )
// });
let timeout = 0;
for (const char of sentence) {
  setTimeout (() =>   process.stdout.write(char), timeout
  )
  timeout += 50;
}

setTimeout( () => process.stdout.write("\n"), timeout)
// console.log();