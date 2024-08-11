// backend/routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const {
  deposit,
  withdraw,
  getBalance
} = require('../controllers/transactionController');

router.post('/deposit', deposit);
router.post('/withdraw', withdraw);
router.get('/balance/:name', getBalance);

module.exports = router;
