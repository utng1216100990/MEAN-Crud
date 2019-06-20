import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { ExternalComponent } from './components/external/external.component';
import { HomeComponent } from './components/home/home.component';
import { PendingInvoiceComponent } from './components/pending-invoice/pending-invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    UsersComponent,
    ExternalComponent,
    HomeComponent,
    PendingInvoiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'users', component: UsersComponent },
      { path: 'externals', component: ExternalComponent },
      { path: 'pending_invoices', component: PendingInvoiceComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
