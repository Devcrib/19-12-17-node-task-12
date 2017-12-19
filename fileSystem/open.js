var fs = require("fs");

//Opening File for reading and writing

console.log("Before opening the file!");
fs.open('data.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
  console.log("File opened successfully!");
});

