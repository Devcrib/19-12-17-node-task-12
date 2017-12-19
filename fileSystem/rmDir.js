var fs = require("fs");

//Delete directory /newfolder/tried");
fs.rmdir("C:/Users/OLUWAKEMI/Documents/NEST/NODE 12/newfolder/tried/",function(err){
   if (err) {
      return console.error(err);
   }
   console.log("check the directory 'newfolder' if 'tried' still exists");

   fs.readdir("C:/Users/OLUWAKEMI/Documents/NEST/NODE 12/newfolder",function(err, files){
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file){
        if(file){
         console.log( file );
        }
        else{
          console.log('folder is empty');
        }
      });
   });
});
