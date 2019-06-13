const External_expenses = require('../models/external_expenses');

const external_expensesCtrl = {};

external_expensesCtrl.getExternalExpenses = async (req, res) => {
     const external_expenses = await External_expenses.find();
     res.json(external_expenses);
};

external_expensesCtrl.createExternalExpenses = async (req, res) => {
    const external_expenses = new External_expenses({
        reason: req.body.reason,
        cost: req.body.cost
    });
    await external_expenses.save();
    res.json({
        'status': 'Expense saved'
    });
};

external_expensesCtrl.getExternalExpense = async (req, res) => {
    const external_expense = await External_expenses.findById(req.params.id);
    res.json(external_expense);
};

external_expensesCtrl.editExternalExpenses = async (req, res) => {
    const { id } = req.params;
    const external_expenses = {
        reason: req.body.reason,
        cost: req.body.cost
    };
    await External_expenses.findByIdAndUpdate(id, {$set: external_expenses}, {new: true});
    res.json({status: 'Expense Updated'});
}

external_expensesCtrl.deleteExternalExpenses = async (req, res) => {
    await External_expenses.findByIdAndRemove(req.params.id);
    res.json({status: 'Expense Deleted'});
}

module.exports = external_expensesCtrl; 