var fs = require('fs');

//To get information about a file;
fs.stat('data.txt', function (err, fileStats) {
  if (err) {
      return console.error(err);
  }
  console.log(fileStats);
  console.log("File info supplied successfully!");

  // Check file type
  console.log("is data.txt a File ? " + fileStats.isFile());
  console.log("is data.txt a Directory ? " + fileStats.isDirectory());
});
