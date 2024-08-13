import express from 'express'
const app = express()

app.get('/', function(req,res){
    res.send("Oi mundo!")
})
app.get('/diego', function(req,res){
    res.send("Oi diego!")
})



app.listen(3000)