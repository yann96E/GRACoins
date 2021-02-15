import express from "express"
import { User } from "../models/User";
import { createTransaction } from "../blockchain/Transactions"
import { auth } from "../middleware/auth"
import { coinValue } from "../blockchain/Block";

const Router = express.Router()

Router.get("/", (req, res) => {
  res.json("");
});

Router.post('/me/transaction', auth,(req, res) => {
  if (req.user.amount < req.body.amount)
    return res.send({msg: "You have not enough coins"})
  const transaction = createTransaction(req.user.walletAddress, req.body.address, req.body.amount);
  transaction.signTransaction(myKey);
  savjeeCoin.addTransaction(transaction);
  return res.send(transaction)
});

Router.get("/me/get-coin-amount", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  return res.send(user.amount)
})

Router.get("/me/get-sum", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  return res.send(user.amount * coinValue)
})

Router.get("/get-coin-value", () => {
  return res.send(coinValue)
})

export { Router as default };