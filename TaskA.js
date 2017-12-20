var http = require('http');
var fs = require('fs');
var url = require('url');
//var nm = require('./new');

http.createServer(function (req, res) {
    fs.readFile('sample.html', function(err, data){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(data);
        });
}).listen(8000);

fs.appendFile('document.txt', ' We love node js', function(err){
    if (err) throw  err;
    console.log('saved!');
});

fs.writeFile ('document.txt', ' this is the update ', function(err){
   if (err) throw err;
    console.log('Updated');
});
fs.appendFile('make.txt', ' tjbsadmjasbkc nm jK CMNABCB C SHVCAHSCKJAS ', function(err){
    if (err) throw err;
    console.log('saved!');
});

fs.unlink('make.txt', function(err){
   if(err) throw err;
    console.log('Deleted!');
});
