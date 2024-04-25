var mysql=require('mysql');
var config={
    connectionLimit:100,
    host:'localhost',
    user:'node',
    password:'pass',
    database:'nodedb',
    port:'3306'
}

var pool=mysql.createPool(config); //
var connection;    //connection 한 개체 연결
exports.connect = function(){
    pool.getConnection(function(err,con){
        if(err){
            console.log('db접속 오류:',err);
        }else{
            connection=con;             //
            console.log('접속성공');
        }
});
}

exports.get = function(){   // exports 해줘야 외부에서 사용가능  / get connection가져오는 함수 
    return connection;
}