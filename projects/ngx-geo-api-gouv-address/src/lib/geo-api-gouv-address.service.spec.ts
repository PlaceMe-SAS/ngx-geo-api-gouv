import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GeoApiGouvAddressService } from './geo-api-gouv-address.service';
import {DEFAULT_GEO_API_URL} from "./geo-api-gouv-address.tokens";

describe('GeoApiGouvAddressService', () => {
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

  it('should use the default URL when none custom url is provided', () => {
    // @ts-ignore
    expect(service.apiUrl).toBe(DEFAULT_GEO_API_URL);
  });
});
