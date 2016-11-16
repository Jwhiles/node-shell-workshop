const fs = require('fs');
const data = 'Simply Easy Learning';
console.log(process.argv)

let writeStream = fs.createWriteStream('output.txt');
writeStream.write(data, 'utf8');
writeStream.end();

writeStream.on('finish', function() {
  console.log('./output.txt');
})
