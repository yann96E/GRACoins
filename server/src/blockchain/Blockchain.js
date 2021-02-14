import { createBlock, mineBlock } from "./Block";

/**
 * Returns the latest block on our chain. Useful when you want to create a
 * new Block and you need the hash of the previous Block.
 *
 * @returns {Block[]}
 */
export const getLatestBlock = (blockchain) => blockchain.chain[blockchain.chain.length - 1];

/**
 * Takes all the pending transactions, puts them in a Block and starts the
 * mining process. It also adds a transaction to send the mining reward to
 * the given address.
 *
 * @param {string} miningRewardAddress
 */
export const minePendingTransactions = (blockchain, miningRewardAddress) => {
  blockchain.pendingTransactions.push(createTransaction(null, miningRewardAddress, blockchain.miningReward));
  const block =  createBlock(blockchain.pendingTransactions, blockchain.getLatestBlock().hash);
  mineBlock(block, blockchain.difficulty);
  blockchain.chain.push(block);
  blockchain.pendingTransactions = [];
}


/**
 * Add a new transaction to the list of pending transactions (to be added
 * next time the mining process starts). This verifies that the given
 * transaction is properly signed.
 *
 * @param {Transaction} transaction
 */
export const addTransaction = (blockchain, transaction) => {
  if (!transaction.fromAddress || !transaction.toAddress)
    throw new Error('Transaction must include from and to address');

  // Verify the transactiion
  if (!transaction.isValid())
    throw new Error('Cannot add invalid transaction to chain');
  
  if (transaction.amount <= 0)
    throw new Error('Transaction amount should be higher than 0');
  
  // Making sure that the amount sent is not greater than existing balance
  if (blockchain.getBalanceOfAddress(transaction.fromAddress) < transaction.amount)
    throw new Error('Not enough balance');

  blockchain.pendingTransactions.push(transaction);
}

/**
 * Returns the balance of a given wallet address.
 *
 * @param {string} address
 * @returns {number} The balance of the wallet
 */
export const getBalanceOfAddress = (blockchain, address) => {
  let balance = 100;

  for (const block of blockchain.chain) {
    for (const trans of block.transactions) {
      if (trans.fromAddress === address)
        balance -= trans.amount;
      if (trans.toAddress === address)
        balance += trans.amount;
    }
  }
  return balance;
}

/**
 * Returns a list of all transactions that happened
 * to and from the given wallet address.
 *
 * @param  {string} address
 * @return {Transaction[]}
 */
export const getAllTransactionsForWallet = (blockchain, address) => {
  const txs = [];

  for (const block of blockchain.chain) {
    for (const tx of block.transactions) {
      if (tx.fromAddress === address || tx.toAddress === address) {
        txs.push(tx);
      }
    }
  }
  return txs;
}

/**
 * Loops over all the blocks in the chain and verify if they are properly
 * linked together and nobody has tampered with the hashes. By checking
 * the blocks it also verifies the (signed) transactions inside of them.
 *
 * @returns {boolean}
 */
export const isChainValid = (blockchain) => {
  // Check if the Genesis block hasn't been tampered with by comparing
  // the output of createGenesisBlock with the first block on our chain
  const realGenesis = JSON.stringify(blockchain.createGenesisBlock());

  if (realGenesis !== JSON.stringify(blockchain.chain[0]))
    return false;

  // Check the remaining blocks on the chain to see if there hashes and
  // signatures are correct
  for (let i = 1; i < blockchain.chain.length; i++) {
    const currentBlock = blockchain.chain[i];

    if (!currentBlock.hasValidTransactions())
      return false;
    if (currentBlock.hash !== currentBlock.calculateHash())
      return false;
  }

  return true;
}

export const createBlockChain = () => ({
  chain: [],
  difficulty: 2,
  pendingTransactions: [],
  miningReward: 100
})
