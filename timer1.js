const args = process.argv.slice(2);
args.forEach((time) => {
  if (time < 0 || isNaN(time)) {
    return;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(`. ${time} seconds`);
  }, time * 1000);
});