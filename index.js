const express = require ('express')

const app = express()

app.listen(4000, () =>{
    console.log("Aplicação rodando na porta 4000")
})


app.get('/', (request, response) =>{
    response.send("A aplicação está rodando")
})