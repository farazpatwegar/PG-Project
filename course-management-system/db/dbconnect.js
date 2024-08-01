const mysql=require("mysql2");

var mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'courseManagement',
})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connection done")
    }
    else{
        console.log(err);
    }
})

module.exports=mysqlConnection;