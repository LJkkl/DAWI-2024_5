import express from 'express'
const app = express()

app.get('/', function(req,res){
    res.send("Oi mundo!")
})
app.get('/luan', function(req,res){
    res.send("Oi Luan!")
})
app.get('/:x', function(req,res){
    const mensagem = "Oi" + req.params.x
    res.send()
})
app.get('/:nome/:sobrenome', function(req,res){
    const mensagem = "Oi"+req.params.nome + " "+req.params.sobrenome
    res.send(mensagem)
})



app.listen(3000)