const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';

// Se conectará mongoDB a la dirección definida en URI
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;