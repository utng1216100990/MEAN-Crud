import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  selectedInvoice: Invoice;
  invoices: Invoice[];
  readonly URL_API = 'http://localhost:3000/api/invoices';

  constructor(private http: HttpClient) {
    this.selectedInvoice = new Invoice();  
   }

   getInvoices() {
    return this.http.get(this.URL_API);
  }

  postInvoice(Invoice: Invoice) {
    return this.http.post(this.URL_API, Invoice);
  }

  putInvoice(Invoice: Invoice) {
    return this.http.put(this.URL_API + `/${Invoice._id}`, Invoice);
  }

  deleteInvoice(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
