const router = require('express').Router();


function initRouts(){
    router.get('/', function(req, res){
        res.render('index.pug', { title: 'Hey', message: 'Hello there!' })
    });
    return router;
}

module.exports = initRouts;