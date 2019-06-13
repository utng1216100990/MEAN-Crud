import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExternalExpense } from '../models/external-expense';

@Injectable({
  providedIn: 'root'
})
export class ExternalExpenseService {

  selectedExternalExpense: ExternalExpense;
  external_expenses: ExternalExpense[];
  readonly URL_API = 'http://localhost:3000/api/external_expenses';

  constructor(private http: HttpClient) {
    this.selectedExternalExpense = new ExternalExpense();  
   }

   getExternalExpenses() {
    return this.http.get(this.URL_API);
  }

  postExternalExpenses(external_expense: ExternalExpense) {
    return this.http.post(this.URL_API, external_expense);
  }

  putExternalExpenses(external_expense: ExternalExpense) {
    return this.http.put(this.URL_API + `/${external_expense._id}`, external_expense);
  }

  deleteExternalExpenses(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
