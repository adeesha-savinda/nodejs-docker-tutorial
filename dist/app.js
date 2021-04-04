'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var router = _express2.default.Router();

var path = __dirname + '/views/';
var port = 8080;

router.use(function (req, res, next) {
    console.log('/', req.method);
    next();
});

router.get('/', function (req, res) {
    res.sendFile(path + 'index.html');
});

router.get('/sharks', function (req, res) {
    res.sendFile(path + 'sharks.html');
});

app.use(_express2.default.static(path));
app.use('/', router);

app.listen(port, function () {
    console.log('***** app listening on port ' + port + ' *****');
});