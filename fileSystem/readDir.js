var fs = require("fs");

// Read directory /Node 12");
fs.readdir("C:/Users/OLUWAKEMI/Documents/NEST/NODE 12/newfolder/",function(err, files){
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file){
      console.log( file );
   });
});
