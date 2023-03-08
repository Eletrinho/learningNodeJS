const express = require('express')
const FilmeModel = require('../src/models/user.models')

const app = express()
app.use(express.json())

app.get("/home", (req, res) => {
    const path = require('path')
    const fs = require('fs')
    var filmes
    fs.readFile(path.join(__dirname, '../', 'filmes.json'), (err, data) => {
        if (err) return console.log(`Erro: ${err}`)
        filmes = JSON.parse(data)
        res.status(200).json(filmes)
    })
})

app.get("/users", async (req, res) => {
    try{res.status(200).json(await FilmeModel.find({}))}
    catch (err) {res.status(500).send(err)}
})

app.post("/users", async (req, res) => {
    try {
        const filme = await FilmeModel.create(req.body)
        res.status(201).json(filme)
    } catch (err){ res.status(500).send(err)}
})

app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        res.status(200).json(await FilmeModel.findById(id))
    } catch (err) {
        res.status(500).json(err)
    }
})

app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const movie = await FilmeModel.findByIdAndUpdate(id, req.body)
        const newMovie = await FilmeModel.findById(id)
        res.status(200).json({old: movie, new: newMovie})
    } catch (err) {res.status(500).json(err)}
})

app.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const movie = await FilmeModel.findByIdAndDelete(id)
        res.status(200).json(movie)
    } catch (err) {res.status(500).json(err)}
})

const port = 8080

app.listen(port, () => console.log(`Ok!`))