import crypto from "crypto"
  
// const debug = require('debug')('savjeecoin:blockchain');

/**
 * Creates a SHA256 hash of the transaction
 *
 * @returns {string}
 */
const calculateTransactionHash = (transaction) => crypto.createHash('sha256').update(transaction.fromAddress + transaction.toAddress + transaction.amount + transaction.timestamp).digest('hex');

/**
 * Signs a transaction with the given signingKey (which is an Elliptic keypair
 * object that contains a private key). The signature is then stored inside the
 * transaction object and later stored on the blockchain.
 *
 * @param {string} signingKey
 */
export const signTransaction = (transaction, signingKey) => {
    // You can only send a transaction from the wallet that is linked to your
    // key. So here we check if the fromAddress matches your publicKey
    if (signingKey.getPublic('hex') !== transaction.fromAddress)
        throw new Error('You cannot sign transactions for other wallets!');

    // Calculate the hash of this transaction, sign it with the key
    // and store it inside the transaction obect
    const sig = signingKey.sign(calculateTransactionHash(), 'base64');
    transaction.signature = sig.toDER('hex');
}

/**
 * Checks if the signature is valid (transaction has not been tampered with).
 * It uses the fromAddress as the public key.
 *
 * @returns {boolean}
 */
export const isValid = (transaction) => {
    // If the transaction doesn't have a from address we assume it's a
    // mining reward and that it's valid. You could verify this in a
    // different way (special field for instance)
    if (transaction.fromAddress === null) 
        return true;
    if (!transaction.signature || transaction.signature.length === 0)
        throw new Error('No signature in this transaction');

    const publicKey = ec.keyFromPublic(transaction.fromAddress, 'hex');
    return publicKey.verify(transaction.calculateHash(), transaction.signature);
}

export const createTransaction = (fromAddress, toAddress, amount) => ({
    fromAddress: fromAddress,
    toAddress: toAddress,
    amount: amount,
    timestamp: Date.now(),
    signature: ''
})
