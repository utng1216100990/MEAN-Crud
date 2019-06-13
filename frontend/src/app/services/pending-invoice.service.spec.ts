import { TestBed } from '@angular/core/testing';

import { PendingInvoiceService } from './pending-invoice.service';

describe('PendingInvoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendingInvoiceService = TestBed.get(PendingInvoiceService);
    expect(service).toBeTruthy();
  });
});
