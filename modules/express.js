const express = require('express')
const UserModel = require('../src/models/user_models')

const app = express()
app.use(express.json())

app.get("/users", async (req, res) => {
    try{res.status(200).json(await UserModel.find({}))}
    catch (err) {res.status(500).send(err)}
})

app.post("/users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json(user)
    } catch (err){ res.status(500).send(err)}
})

app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        res.status(200).json(await UserModel.findById(id))
    } catch (err) {
        res.status(500).json(err)
    }
})

app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body)
        const newUser = await UserModel.findById(id)
        res.status(200).json({old: movie, new: newMovie})
    } catch (err) {res.status(500).json(err)}
})

app.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndDelete(id)
        res.status(200).json(user)
    } catch (err) {res.status(500).json(err)}
})

const port = 8080

app.listen(port, () => console.log(`Ok!`))