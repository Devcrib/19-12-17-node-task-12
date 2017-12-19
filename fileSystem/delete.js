var fs = require("fs");

//delete an existing file
fs.unlink('data.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});
