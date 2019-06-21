import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { NgForm } from '@angular/forms';
import { Invoice } from '../../models/invoice';
declare var M: any;

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  providers: [InvoiceService]
})
export class InvoiceComponent implements OnInit {

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.getInvoices();
  }

  addInvoice(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.invoiceService.putInvoice(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getInvoices();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.invoiceService.postInvoice(form.value)
      .subscribe(res => {
        this.getInvoices();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
  }

  getInvoices() {
    this.invoiceService.getInvoices()
      .subscribe(res => {
        this.invoiceService.invoices = res as Invoice[];
      });
  }

  editInvoice(invoice: Invoice) {
    this.invoiceService.selectedInvoice = invoice;
  }

  deleteInvoice(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.invoiceService.deleteInvoice(_id)
        .subscribe(res => {
          this.getInvoices();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.invoiceService.selectedInvoice = new Invoice();
    }
  }

}
