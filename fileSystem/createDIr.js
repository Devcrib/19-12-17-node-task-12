var fs = require("fs");

console.log("Creating new directory /fileSystem/newFile");
fs.mkdir("C:/Users/OLUWAKEMI/Documents/NEST/NODE 12/newfolder/tried/test",function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});
