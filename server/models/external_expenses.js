const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ExternalExpensesSchema = new Schema({
    reason: { type: String, required: true },
    cost: { type: Number, required: true },
});

module.exports = mongoose.model('External_expenses', ExternalExpensesSchema);