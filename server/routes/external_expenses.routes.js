const express = require ('express');
const router = express.Router();

const external_expenses = require('../controllers/external_expenses.controller');

router.get('/', external_expenses.getExternalExpenses);
router.post('/', external_expenses.createExternalExpenses);
router.get('/:id', external_expenses.getExternalExpense);
router.put('/:id', external_expenses.editExternalExpenses);
router.delete('/:id', external_expenses.deleteExternalExpenses);

module.exports = router;