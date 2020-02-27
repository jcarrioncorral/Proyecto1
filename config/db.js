var mysql      = require('mysql');
var connection = mysql.createConnection({

  host : 'localhost',
 
  user : 'root',
    
  password : 'root',
    
  database : 'viajes_dia'
});
 

connection.connect(
    function (error){
        if(error){
            throw error;
        }else{
            console.log("Conexión a BD correcta")
        }
    }
);
 
module.exports = connection;