var express = require('express');
var router = express.Router();
const connection = require('../config/db')


router.get('/', function (req, res) {

  let sql = 'SELECT * FROM user';

  connection.query(sql, (err, data) => {

    if (err) {
      throw err;
    } else {
      res.render('form', { data: data })
    }

  });

});

router.get('/ruta', function (req, res) {

  let sql = 'SELECT * FROM user';

  connection.query(sql, (err, data) => {

    if (err) {
      throw err;
    } else {
      res.render('ruta', { data: data })
    }

  });

});

router.post('/', function (req, res) {


  let name_user = req.body.name_user;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let date_of_birth = req.body.date_of_birth;
  let password = req.body.password;
  console.log(req.body)
  let sql = "INSERT INTO user set? ";

  connection.query(sql, { name_user, lastname, email, date_of_birth, password }, (err, result) => {

    console.log(result)

    res.redirect('/');

  });

});

router.get('/delete/:id', function (req, res) {

  let id = req.params.id;

  connection.query("DELETE  FROM user WHERE  idusuario = " + id,
    function (err, result) {

      res.redirect('/form')
    })
});




router.get('/edit/:id', function (req, res) {

  let id = req.params.id;

  connection.query("SELECT * FROM user WHERE idusuario = ?", [id], (err, results) => {
    res.render('formindividual', { results: results[0] })

  });
});

router.post('/update/:id', function (req, res) {

  let id = req.params.id;
  let name_user = req.body.name_user;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let date_of_birth = req.body.date_of_birth;
  let password = req.body.password;

  connection.query("UPDATE user set? WHERE idusuario = " + id, { name_user, lastname, email, date_of_birth, password },
    (err, results) => {
      res.redirect('/form');
    });
});



module.exports = router;

