// backend/controllers/transactionController.js
const Account = require('../models/Account');

// Deposit money to account
exports.deposit = async (req, res) => {
  const { name, amount } = req.body;
  try {
    let account = await Account.findOne({ name });
    if (!account) {
      account = new Account({ name, balance: amount });
    } else {
      account.balance += amount;
    }
    await account.save();
    res.json({ message: 'Deposit successful', account });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Withdraw money from account
exports.withdraw = async (req, res) => {
  const { name, amount } = req.body;
  try {
    const account = await Account.findOne({ name });
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    if (account.balance < amount) {
      return res.status(400).json({ error: 'Insufficient funds' });
    }
    account.balance -= amount;
    await account.save();
    res.json({ message: 'Withdrawal successful', account });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get account balance
exports.getBalance = async (req, res) => {
  const { name } = req.params;
  try {
    const account = await Account.findOne({ name });
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    res.json({ balance: account.balance });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
