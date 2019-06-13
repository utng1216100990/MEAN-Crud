const Pending_invoice = require('../models/pending_invoice');

const Pending_InvoiceCtrl = {};

Pending_InvoiceCtrl.getPendingInvoices = async (req, res) => {
     const pending_invoices = await Pending_invoice.find();
     res.json(pending_invoices);
};

Pending_InvoiceCtrl.createPendingInvoice = async (req, res) => {
    const pending_invoice = new Pending_invoice({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    });
    await pending_invoice.save();
    res.json({
        'status': 'Factura guardada'
    });
};

Pending_InvoiceCtrl.getPendingInvoice = async (req, res) => {
    const pending_invoice = await Pending_invoice.findById(req.params.id);
    res.json(pending_invoice);
};

Pending_InvoiceCtrl.editPendingInvoice = async (req, res) => {
    const { id } = req.params;
    const pending_invoice = {
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    };
    await Pending_invoice.findByIdAndUpdate(id, {$set: pending_invoice}, {new: true});
    res.json({status: 'Factura actualizada'});
}

Pending_InvoiceCtrl.deletePendingInvoice = async (req, res) => {
    await Pending_invoice.findByIdAndRemove(req.params.id);
    res.json({status: 'Factura eliminada'});
}

module.exports = Pending_InvoiceCtrl; 