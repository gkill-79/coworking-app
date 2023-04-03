

const express = require('express')
const app = express()
const port = 3080

app.get('/monChemin', (req, res) => {
    console.log("j'ai reçu une requête")
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




