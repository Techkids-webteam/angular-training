// import thư viện tạo server có tên express
var express = require('express');
// trỏ đường dẫn
var path = require('path');

//========================
var app = express();
// thử xem server chạy ko
// app.get('/', function(req,res) {
//   res.send('hello web team');
// });
// api method tạo ở đây
// tất cả những đường link còn lại trỏ sang angular-baby
app.get('/*', function(req,res) {
  res.sendFile(path.join( __dirname,'/public/app/views/index.html'));
});
// tạo listen port
app.listen(8080);
console.log('listening at 8080');
