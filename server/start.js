var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public/'))

app.use('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000, function(){
  console.log('ld40 listening on port 3000!');
});
