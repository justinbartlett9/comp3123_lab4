let express = require('express')
let app = express();

app.get('/hello', (req, res) => {
    res.send("Hello Express JS")
})

app.get('/user', (req, res) => {
    response = {
        firstname: req.query.fname,
        lastname: req.query.lname,
    }
    res.send(response)
})

app.post('/user/:fname/:lname', (req, res) => {
    response = {
        firstname: req.params.fname,
        lastname: req.params.lname,
    }
    res.send(response)
})

let server = app.listen(8088)