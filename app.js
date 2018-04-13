const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const app=express();

app.use(bodyParser.urlencoded())
const pool=mysql.createPool({
    host:"localhost",
	user:"root",
	password:"yanbin",
	database:"studentlist",
	port:3306
})

app.use('/huo',(req,res)=>{   
    console.log(req.body)
	res.setHeader('Access-Control-Allow-Origin','*')
   console.log(req.body)
   pool.getConnection((err,connection)=>{
		  if(err) throw err;
	connection.query(`SELECT * FROM list`,(err,rows)=>{
		   if (err) throw err;
			  console.log(rows)
		  res.send(rows);
		  connection.end()
	})
   })
  
  }) 
//  app.use('/update',function(req,res){
// 	res.setHeader('Access-Control-Allow-Origin','*');
// 	console.log(req.query)
//    pool.getConnection(function(err,connection){
// 	   if(err) throw err;
// 	   connection.query(`UPDATE list SET state = '${req.body.state}' WHERE id = '${req.body.id}'`,function(err,rows){
// 		   if(err) throw err;
// 		   res.send('修改成功');
	
// 	   })
//    })
// })

app.listen(8000,()=>{
    console.log("启动。。。")
})

