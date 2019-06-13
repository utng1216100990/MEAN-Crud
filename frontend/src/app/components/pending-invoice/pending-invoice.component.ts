import { Component, OnInit } from '@angular/core';

import { PendingInvoiceService } from '../../services/pending-invoice.service';

import { NgForm } from '@angular/forms';
import { PendingInvoice } from '../../models/pending-invoice';

declare var M: any;

@Component({
  selector: 'app-pending-invoice',
  templateUrl: './pending-invoice.component.html',
  styleUrls: ['./pending-invoice.component.css'],
  providers: [PendingInvoiceService]
})
export class PendingInvoiceComponent implements OnInit {

  constructor(private pendingInvoiceService: PendingInvoiceService) { }

  ngOnInit() {
    this.getPendingInvoice();
  }

  addPendingInvoice(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.pendingInvoiceService.putPendingInvoice(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getPendingInvoice();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.pendingInvoiceService.postPendingInvoice(form.value)
      .subscribe(res => {
        this.getPendingInvoice();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
  }

  getPendingInvoice() {
    this.pendingInvoiceService.getPendingInvoice()
      .subscribe(res => {
        this.pendingInvoiceService.pending_invoices = res as PendingInvoice[];
      });
  }

  editPendingInvoice(pending_invoice: PendingInvoice) {
    this.pendingInvoiceService.selectedPending_Invoice = pending_invoice;
  }

  deletePendingInvoice(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.pendingInvoiceService.deletePendingInvoice(_id)
        .subscribe(res => {
          this.getPendingInvoice();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.pendingInvoiceService.selectedPending_Invoice = new PendingInvoice();
    }
  }

}
