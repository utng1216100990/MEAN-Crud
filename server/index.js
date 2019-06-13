const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

/* Settings */
// Toma un puerto disponible o el 3000.
app.set('port', process.env.PORT || 3000); 


/* Middlewares */
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


/* Routes */
app.use('/api/employees' ,require('./routes/employee.routes'));
app.use('/api/users' ,require('./routes/user.routes'));
app.use('/api/external_expenses' ,require('./routes/external_expenses.routes'));
app.use('/api/pending_invoices' ,require('./routes/pending_invoice'));



//Starting server in port 3000
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})