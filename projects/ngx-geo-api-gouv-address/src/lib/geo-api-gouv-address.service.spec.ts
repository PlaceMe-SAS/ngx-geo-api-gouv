import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GeoApiGouvAddressService } from './geo-api-gouv-address.service';

describe('GeoApiGouvAdressService', () => {
  let service: GeoApiGouvAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GeoApiGouvAddressService],
    });
    service = TestBed.inject(GeoApiGouvAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
