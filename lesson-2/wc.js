const fs = require('fs');
const readline = require('readline');
let inputFile = process.argv[2];
let lines = 0
let stdin = process.openStdin();
let rosemarysbaby

if (inputFile) {
  rosemarysbaby = readline.createInterface({
    input: fs.createReadStream(inputFile)
  });
} else {
  rosemarysbaby = readline.createInterface({
    input: stdin
  });
}


rosemarysbaby.on('line', function (theshining) {
  lines += 1;
})

rosemarysbaby.on('close', function () {
  console.log(lines);
  stdin.end();
})
