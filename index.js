var express = require('express')
var app = express()

app.get('/', function (req, res) { res.send('Hello World!');
})

app.listen(3000, function () {
console.log('Hello World!')
})

app.get('/lunch/', function (req, res) {
    items = ['피자', '치킨', '떡뽂이']
    var item = items[Math.floor(Math.random()*items.length)];
    var result = '오늘 먹을건 '+item+'입니다!'
    res.send(result)
})