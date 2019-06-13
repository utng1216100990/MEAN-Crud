const mongoose = require ('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    occupation: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);