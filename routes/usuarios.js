var express = require('express');
var router = express.Router();
const connection = require('../config/db')
/* GET home page. */

router.get('/', function(req, res, next) {
    let sql = 'SELECT * FROM user';

    connection.query(sql, (err, data) => {
  
      if (err) {
        throw err;
      } else {
        res.render('usuarios', { data: data })
      }
  
    });});

module.exports = router;
