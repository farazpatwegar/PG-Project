const express=require("express")
const myrouter=express.Router()
const connection=require('../db/dbconnect')

myrouter.get("/",function(req,res){
    res.redirect("/addcourseform")
})


//get all courses
myrouter.get("/course",function(req,res){
    connection.query("select *from courses",function(err,data,fields){
        if(err){
            res.status(500).send("data not found")
        }
        else{
            res.status(200).render("displaycourse",{coursedata:data})
        }
    })
})

/*
//single object
myrouter.get("/course/:id",function(req,res){
    connection.query("Select *from courses where id=?",[req.params.cid],function(err,data,fields){
        if(err){
           res.status(500).send("id is invalid") 
        }
        else{
            res.json(data[0])
        }
    })
})
*/

//display empty form to add courses
myrouter.get("/addcourseform",function(req,res){
    res.render("addcourse")
})

//add new object
myrouter.post("/insertcourse",function(req,res){
    console.log(req.body);
    connection.query("insert into courses values(?,?,?,?)",[req.body.cid,req.body.cname,req.body.fees,req.body.duration],function(err,result){
        if(err){
            console.log(err)
            res.status(500).send("data not inserted")
        }
        else{
            if(result.affectedRows > 0){
                res.redirect("/course")
            }
        }
    })
})

//delete an object
myrouter.get("/deletecourse/:id",function(req,res){
    console.log("cid: ",req.params.id);
    connection.query("delete from courses where cid=?",[req.params.id],function(err,result){
        if(err){
            console.log(err)
            res.status(500).send("data not deleted")
        }
        else{
            if(result.affectedRows>0){
                res.redirect("/course")
            }
        }
    })
})

//data will display in the form for editing
myrouter.get("/editcourse/:id",function(req,res){
    connection.query("select * from courses where cid=?",[req.params.id],function(err,data){
        if(err){
            // console.log(err)
            res.status(500).send("Error occurred")
        }
        else{
            if(data.length>0){
                res.render("updateCourse",{course:data[0]})
            }
        }
    })
})


//update data in the database
myrouter.post("/updatecourse",function(req,res){
    connection.query("update courses set cname=?,fees=?,duration=? where cid=?",[req.body.cname,req.body.fees,req.body.duration,req.body.cid],function(err,result){
        if(err){
            console.log(err);
            res.status(500).send("id is invalid")
        }
        else{
            res.redirect("/course")
        }
    })
})

module.exports=myrouter;