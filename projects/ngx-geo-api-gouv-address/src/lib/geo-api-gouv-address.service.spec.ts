import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GeoApiGouvAddressService } from './geo-api-gouv-address.service';

describe('GeoApiGouvAddressService', () => {
  let service: GeoApiGouvAddressService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GeoApiGouvAddressService],
    });
    service = TestBed.inject(GeoApiGouvAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
