import { Component, OnInit } from '@angular/core';
import { ExternalExpenseService } from '../../services/external-expense.service';

import { NgForm } from '@angular/forms';
import { ExternalExpense } from '../../models/external-expense';

declare var M: any;

@Component({
  selector: 'app-external-expenses',
  templateUrl: './external-expenses.component.html',
  styleUrls: ['./external-expenses.component.css'],
  providers: [ExternalExpenseService]
})
export class ExternalExpensesComponent implements OnInit {

  constructor(private externalExpensesService: ExternalExpenseService) { }

  ngOnInit() {
    this.getExternalExpense();
  }

  addExternalExpense(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.externalExpensesService.putExternalExpenses(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getExternalExpense();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.externalExpensesService.postExternalExpenses(form.value)
      .subscribe(res => {
        this.getExternalExpense();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
  }

  getExternalExpense() {
    this.externalExpensesService.getExternalExpenses()
      .subscribe(res => {
        this.externalExpensesService.external_expenses = res as ExternalExpense[];
      });
  }

  editExternalExpense(external_expenses: ExternalExpense) {
    this.externalExpensesService.selectedExternalExpense = external_expenses;
  }

  deleteExternalExpense(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.externalExpensesService.deleteExternalExpenses(_id)
        .subscribe(res => {
          this.getExternalExpense();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.externalExpensesService.selectedExternalExpense = new ExternalExpense();
    }
  }

}
