import { TestBed } from '@angular/core/testing';

import { TestamaniService } from './testamani.service';

describe('TestamaniService', () => {
  let service: TestamaniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestamaniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
