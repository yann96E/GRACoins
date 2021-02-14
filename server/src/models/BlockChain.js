import mongoose from "mongoose"
import { Blockchain, Block } from "../blockchain/Blockchain";
import BlockSchema from "./Block"

export const BlockChainSchema = new mongoose.Schema({
    chain: {
        type: [BlockSchema],
        default: [],
    },
    difficulty: {
        type: Number,
        defualt: 2
    },
    miningReward: {
        type: Number,
        default: 100
    },
    pendingTransactions: {
        type: [],
        default: []
    }
})

export const User = mongoose.model('blockchain', BlockChainSchema);