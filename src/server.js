
import EC_ from 'elliptic'
import { Transaction } from './blockchain';

const EC = EC_.ec
const ec = new EC('secp256k1');

// Your private key goes here
const myKey = ec.keyFromPrivate('7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf');

// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic('hex');

// Create new instance of Blockchain class
const savjeeCoin = new Blockchain();

const app = express();
const port = 3000;

// user wallet info
app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.get('/create-transaction', (req, res) => {
    const transaction = Transaction(myWalletAddress, req.query.address, req.query.amount);
    transaction.signTransaction(myKey);
    savjeeCoin.addTransaction(transaction);
    return res.send(transaction)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
