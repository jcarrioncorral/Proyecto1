var express = require('express');
var router = express.Router();
var multer = require('multer');
const connection = require('../config/db')


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })




router.post('/carri', upload.single('myFile'), function (req, res, next) {
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
 console.log(req.body);
  let name = req.body.name;
  let description = req.body.description;
  let price = req.body.price;
  let img = req.file.originalname;
  console.log(req.file)

let sql=" INSERT INTO route set? "

  connection.query(sql,{name,description,price,img},
 
    (error, result) => {

    res.redirect('/ruta');

    });

});

router.get('/', function (req, res) {

  let sql = 'SELECT * FROM route';

  connection.query(sql, (err, data) => {

    if (err) {
      throw err;
    } else {
      res.render('ruta', { data: data })
    }

  });

});




router.get('/delete/:id', function (req, res) {

  let id = req.params.id;

  connection.query("DELETE  FROM  route  idroute = " + id,
    function (err, result) {

      res.redirect('/')

    })
});


router.get('/edit/:id', function (req, res) {

  let id = req.params.id;

  connection.query("SELECT * FROM route WHERE idroute = ?", [id], (err, results) => {
    res.render('rutaindividual', { results: results[0] })
    res.redirect('/ruta');
  });
});


router.post('/update/:id', function (req, res) {

  let id = req.params.id;
  let name = req.body.name;
  let description = req.body.description;
  let price = req.body.price;

  connection.query("UPDATE route set? WHERE idroute = " + id,{name,description,price},
    (err, results) => {
      res.redirect('/ruta');
    });
});



module.exports = router;