import mongoose from "mongoose"

const url = `mongodb+srv://kynda:kynda45*@gracoin.uezqr.mongodb.net/kynda?retryWrites=true&w=majority`;


// const url = "mongodb://127.0.0.1:8089/mydb"

const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', url)
})
db.on('error', err => {
    console.error('connection error:', err)
})

//     "mongodb://127.0.0.1:27017/mydb",
//     { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

export const initializeMongoServer = async () => {
    await mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
        .then(() => {console.log("Database connected")})
        .catch((err) => {console.log(err)})
}
