const file = process.argv[2];
const fs = require('fs');

readFile = fs.createReadStream(file, 'utf8');

readFile.on('data', function (chunk) {
  process.stdout.write(chunk)
})
