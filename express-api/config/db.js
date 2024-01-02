let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user:   'root',
    password: '',
    database: 'db_express_api'
});

connection.connect( (err) => {
    if(!err){
        console.log(err);
    }else{
        console.log(`Connection successfully!`);
    }
});

module.exports = connection;