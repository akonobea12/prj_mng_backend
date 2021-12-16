//console.log is print in java
//console.log('Hello from the other side');
const mongoose=require("mongoose");
const express  =require('express');
const cors=require('cors');
const{json}=require("express");

//impoet routes in index.js
const todoRoutes=require("./Routes/todoRoutes");

//assign unique hosts number

const app= express();

const port=3000;

//user cors package
app.use(cors());

//initial route
app.get("/",function (req,res) {
    res.send("Welcome to Abokyi  homepage",)

});
//assign routes to app and identify them with a particular path
app.use("/todos", todoRoutes)

//server listen port 3000
app.listen(port,function(){
    console.log(`listening on http://localhost:${port}`);
}
);

const dbUEI="mongodb+srv://snowberry200:nagus200@snowberry.7rngg.mongodb.net/mytodo_Database?retryWrites=true&w=majority"

mongoose.connect(dbUEI,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(response){
    console.log('Connected to mongoose');
})
.catch(function(err){
    console.log(err)
});
