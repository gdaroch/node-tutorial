const os = require('os');
const fs = require('fs');

console.log(`free mem: ${os.freemem()} bytes`);
console.log(`total mem: ${os.totalmem()} bytes`);

const systemInfo = `${os.platform()} - version ${os.release()}`

fs.writeFile('./text.txt', systemInfo, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('file created');
  }
});

fs.readFile('./text.txt', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(`File content: ${data.toString()}`);
  }
});

console.log('last line of code');
