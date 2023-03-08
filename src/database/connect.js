const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@justlearningnodejs.t6x8sps.mongodb.net/?retryWrites=true&w=majority`
const connectToDatabase = async () => {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
        uri, 
        (err) => {
            if (err) return console.log(`db erro: ${err}`)
            return console.log('db tudo certo!')
        }
    )
}

module.exports = connectToDatabase