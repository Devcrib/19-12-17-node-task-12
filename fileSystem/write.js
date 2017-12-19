var fs = require("fs");

//write into an existing file
fs.writeFile('data.txt', 'Just added this line of text',  function(err) {
   if (err) {
      return console.error(err);
   }

   console.log("Data written successfully!");
   console.log("New Data from previous file");
   fs.readFile('data.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log(data.toString());
   });
});
