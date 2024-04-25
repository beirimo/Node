var mysql=require('mysql');
// const { connect } = require('./db');
var config={
    connectionLimit:100,
    host:'localhost',
    user:'node',
    password:'pass',
    database:'nodedb',
    port:'3306'

}


// var mysql=require('mysql');
// var config={
//     connectionLimit:100,
//     host:'localhost',
//     user:'node',
//     password:'pass',
//     database:'nodedb',
//     port:'3306'
// }

var pool=mysql.createPool(config);
var connection;
exports.connect = function(){
    pool.getConnection(function(){
        if(err){
            console.log('db접속 오류:',err);
        }else{
            connection=con;
            console.log('접속성공');
        }
    })    
}





// var pool=mysql.createPool(config);
// var connection;
// exports.connect = function(){
//     pool.getConnection(function(err,con){
//         if(err){
//             console.log('db접속 오류:',err);
//         }else{
//             connection=con;
//             console.log('접속성공');
//         }
// });
// }

// exports.get = function(){
//     return connection;
// }