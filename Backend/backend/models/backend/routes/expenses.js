const express = require("express");
const Expense = require("../models/Expense");
const router = express.Router();

// Add Expense
router.post("/", async (req, res) => {
  const { amount, category } = req.body;
  const expense = new Expense({
    userId: req.userId,
    amount,
    category,
  });
  await expense.save();
  res.status(201).json(expense);
});

// Get All Expenses
router.get("/", async (req, res) => {
  const expenses = await Expense.find({ userId: req.userId });
  res.json(expenses);
});

module.exports = router;
