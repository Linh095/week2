const timer1 = (timers) => {
  timers.forEach(element => {
    setTimeout(() => {
      process.stdout.write(`\x07${element}s timeout\n`);
    }, element * 1000);
  });
};
timer1(process.argv.slice(2));