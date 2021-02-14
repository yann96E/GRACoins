import mongoose from "mongoose"
import EC_ from "elliptic"
import EC from "elliptic"

const ec = new EC.ec('secp256k1');

const generateRandomString = function (length, randomString="") {
    randomString += Math.random().toString(20).substr(2, length);
    if (randomString.length > length) return randomString.slice(0, length);
    return generateRandomString(length, randomString);
};

const generateKey = () => ec.keyFromPrivate(generateRandomString(64)).getPublic('hex')

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    }, 
    amount: {
        type: Number,
        default: 0
    },
    walletAddress: {
        type: String,
        default: generateKey()
    },
})

export const User = mongoose.model('user', UserSchema);