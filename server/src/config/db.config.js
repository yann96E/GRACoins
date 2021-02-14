import mongoose from "mongoose"

const MONGO_USERNAME = "db"
const MONGO_PASSWORD = "root"
const MONGO_HOSTNAME = "gra"
const MONGO_PORT = 27017
const MONGO_DB = "gra-info"

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
  


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
