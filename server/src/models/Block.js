import mongoose from "mongoose"

export const BlockSchema = new mongoose.Schema({
    previousHash: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        default: new Date().format('m-d-Y h:i:s')
    },
    transactions: { //??????
        type: String, 
        required: true
    },
    nonce: {
        type: Number,
        default: 0
    },
    hash: {
        type: String,
        required: true
    },
})
