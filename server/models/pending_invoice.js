const mongoose = require ('mongoose');
const { Schema } = mongoose;

const Pending_invoiceSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true }
});

module.exports = mongoose.model('Pending_invoice', Pending_invoiceSchema);