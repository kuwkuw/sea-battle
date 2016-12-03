const express = require('express');
// const http = require('http');
const path = require('path');
const morgan      = require('morgan');

const routs = require('./router');

const app = express();


module.exports = {
    start: function(){
        app.use('/static', express.static(path.join(__dirname, './public')));
        app.use(morgan('dev'));
        app.set('views', path.join(__dirname, './views'));
        app.set('view engine', 'pug');
        app.use('/', routs());
        app.listen(3000, function () {
            console.log('App listening on port 3000!')
        })
    }
}
