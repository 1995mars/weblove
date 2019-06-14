var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

         res.render('index', {
         });
  
});

router.get('/love', function (req, res) {

    res.render('lovee', {
    });

});
router.get('/letter', function (req, res) {

    res.render('letter', {
    });

});

// Exports
module.exports = router;