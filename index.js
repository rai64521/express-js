const express = require("express")

const app = express()

app.get("/", (req,res)=>{
    return res.send("Hello from home page")
})

app.get("/about",(req,res)=>{
    return res.send(`Hello ${req.query.name}`)
})

const port = 4040

app.listen(port, ()=>{
    console.log(`App is listen on port: ${port}`);
    
})