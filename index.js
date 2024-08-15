import express from 'express'
const app = express()

app.get('/', function(req,res){
    res.send("Oi mundo!")
})
app.get('/luan', function(req,res){
    res.send("Oi Luan!")
})
app.get('/:x', function(req,res){
    const mensagem = "Oi " + req.params.x
    res.send(mensagem)
})
app.get('/:nome/:sobrenome', function(req,res){
    const mensagem = " Oi "+req.params.nome + " "+req.params.sobrenome
    res.send(mensagem)
})

app.get('/soma/:n1/:n2', function(req,res){
    const soma = parseFloat(req.params.n1) + parseFloat(req.params.n2)
    
    res.send("o resultado é: " + soma)
})
app.get('/mult/:n1/:n2', function(req,res){
    const mult = parseInt(req.params.n1) * parseInt(req.params.n2)
    
    res.send("o resultado é: " + mult)
})
app.get('/div/:n1/:n2', function(req,res){
    const div = parseInt(req.params.n1) / parseInt(req.params.n2)
    
    res.send("o resultado é: " + div)
})
app.get('/sub/:n1/:n2', function(req,res){
    const sub = parseInt(req.params.n1) - parseInt(req.params.n2)
    
    res.send("o resultado é: " + sub)
})


app.listen(3000)