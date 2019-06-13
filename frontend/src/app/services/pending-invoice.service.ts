import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PendingInvoice } from '../models/pending-invoice';

@Injectable({
  providedIn: 'root'
})
export class PendingInvoiceService {

  selectedPending_Invoice: PendingInvoice;
  pending_invoices: PendingInvoice[];
  readonly URL_API = 'http://localhost:3000/api/pending_invoices';

  constructor(private http: HttpClient) {
    this.selectedPending_Invoice = new PendingInvoice();  
   }

   getPendingInvoice() {
    return this.http.get(this.URL_API);
  }

  postPendingInvoice(pending_invoice: PendingInvoice) {
    return this.http.post(this.URL_API, pending_invoice);
  }

  putPendingInvoice(pending_invoice: PendingInvoice) {
    return this.http.put(this.URL_API + `/${pending_invoice._id}`, pending_invoice);
  }

  deletePendingInvoice(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
