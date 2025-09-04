import { GeoApiGouvAddressService } from './geo-api-gouv-address.service';
import { TestBed } from '@angular/core/testing';
import { provideGeoApiGouv } from './geo-api-gouv-address.providers';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DEFAULT_GEO_API_URL } from './geo-api-gouv-address.tokens';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('GeoApiGouvAddressProviders', () => {
  let service: GeoApiGouvAddressService;

  it('should inject default url', () => {
    TestBed.configureTestingModule({
      providers: [provideGeoApiGouv(), provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    });

    service = TestBed.inject(GeoApiGouvAddressService);
    // @ts-expect-error private attribute access
    expect(service.apiUrl).toBe(DEFAULT_GEO_API_URL);
  });

  it('should inject custom url', () => {
    const apiUrl = 'https://data.geopf.fr/custom';

    TestBed.configureTestingModule({
      providers: [provideGeoApiGouv(apiUrl), provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    });

    service = TestBed.inject(GeoApiGouvAddressService);
    // @ts-expect-error private attribute access
    expect(service.apiUrl).toBe(apiUrl);
  });
});
