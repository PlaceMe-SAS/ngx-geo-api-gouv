import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GeoApiGouvAddressService } from './geo-api-gouv-address.service';
import { DEFAULT_GEO_API_URL } from './geo-api-gouv-address.tokens';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

describe('GeoApiGouvAddressService', () => {
  let service: GeoApiGouvAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GeoApiGouvAddressService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
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
