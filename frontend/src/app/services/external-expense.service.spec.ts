import { TestBed } from '@angular/core/testing';

import { ExternalExpenseService } from './external-expense.service';

describe('ExternalExpenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalExpenseService = TestBed.get(ExternalExpenseService);
    expect(service).toBeTruthy();
  });
});
