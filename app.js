const express = require('express')
const app = express()
const port = 3080

app.get('/monChemin', (req, res) => {
    console.log("j'ai reçu une requête appuie moi sur la tronche!!!!!")
    res.send('Réponse pour /monChemin')
})

app.get('/monCheminPerdu', (req, res) => {
    console.log("j'ai reçu une requête et je te rentre dedans!!!!!")
    res.send('Hello World!,  I am the king of the World!!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





