const mongoose = require ('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    name: { type: String, required: true },
    autor: { type: String, required: true },
    editorial: { type: String, required: true },
    date: { type: String, required: true }
});

module.exports = mongoose.model('Book', BookSchema);