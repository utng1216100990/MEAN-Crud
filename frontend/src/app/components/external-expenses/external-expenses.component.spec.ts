import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalExpensesComponent } from './external-expenses.component';

describe('ExternalExpensesComponent', () => {
  let component: ExternalExpensesComponent;
  let fixture: ComponentFixture<ExternalExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
