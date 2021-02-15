/**
 * Returns the SHA256 of this block (by processing all the data stored
 * inside this block)
 *
 * @returns {string}
 */
const calculateHash = (block) => crypto.createHash('sha256').update(block.previousHash + block.timestamp + JSON.stringify(block.transactions) + block.nonce).digest('hex');

/**
 * Starts the mining process on the block. It changes the 'nonce' until the hash
 * of the block starts with enough zeros (= difficulty)
 *
 * @param {number} difficulty
 */
export const mineBlock = (block, difficulty) => {
    while (block.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
        block.nonce++;
        block.hash = calculateHash(block);
    }
    debug(`Block mined: ${block.hash}`);
}

/**
 * Validates all the transactions inside this block (signature + hash) and
 * returns true if everything checks out. False if the block is invalid.
 *
 * @returns {boolean}
 */
export const hasValidTransactions = (block) => {
    for (const tx of block.transactions) {
        if (!tx.isValid())
            return false;
    }
    return true;
}
  
export const createBlock = (transactions, previousHash = '') => ({
    previousHash: previousHash,
    timestamp: new Date().format('m-d-Y h:i:s'),
    transactions: transactions,
    nonce: 0,
    hash: calculateHash()  
})

export const coinValue = 1.26