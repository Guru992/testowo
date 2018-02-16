import { TestBed, inject } from '@angular/core/testing';

import { Danepgee2017Service } from './danepgee2017.service';

describe('Danepgee2017Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Danepgee2017Service]
    });
  });

  it('should be created', inject([Danepgee2017Service], (service: Danepgee2017Service) => {
    expect(service).toBeTruthy();
  }));
});
