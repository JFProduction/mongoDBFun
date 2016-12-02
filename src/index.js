var express = require('express'),
    app = express(),
    path = require('path'),
    bodyparser = require('body-parser');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.json());

app.get('/getUser', function(req, res) {
    res.json({
        'name': 'jimmyfargo',
        'msg': 'This is a brief message'
    });
});

app.listen(3100);
console.log('app is listening on port 3100');