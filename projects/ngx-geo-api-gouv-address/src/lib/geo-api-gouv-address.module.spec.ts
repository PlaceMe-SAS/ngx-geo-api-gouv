import { TestBed } from '@angular/core/testing';
import { GeoApiGouvAddressModule } from './geo-api-gouv-address.module';
import { GeoApiGouvAddressService } from './geo-api-gouv-address.service';
import { DEFAULT_GEO_API_URL } from './geo-api-gouv-address.tokens';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('GeoApiGouvAddressModule', () => {
  let service: GeoApiGouvAddressService;

  it('should inject default url', () => {
    TestBed.configureTestingModule({
      imports: [GeoApiGouvAddressModule.forRoot()],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    });

    service = TestBed.inject(GeoApiGouvAddressService);
    // @ts-expect-error private attribute access
    expect(service.apiUrl).toBe(DEFAULT_GEO_API_URL);
  });

  it('should inject custom url', () => {
    const apiUrl = 'https://data.geopf.fr/custom';

    TestBed.configureTestingModule({
      imports: [GeoApiGouvAddressModule.forRoot(apiUrl)],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    });

    service = TestBed.inject(GeoApiGouvAddressService);
    // @ts-expect-error private attribute access
    expect(service.apiUrl).toBe(apiUrl);
  });
});
