const express = require ('express');
const router = express.Router();

const pending_invoice = require('../controllers/pending_invoice.controller');

router.get('/', pending_invoice.getPendingInvoices);
router.post('/', pending_invoice.createPendingInvoice);
router.get('/:id', pending_invoice.getPendingInvoice);
router.put('/:id', pending_invoice.editPendingInvoice);
router.delete('/:id', pending_invoice.deletePendingInvoice);

module.exports = router;