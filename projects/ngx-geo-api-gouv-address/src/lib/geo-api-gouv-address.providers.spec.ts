import {GeoApiGouvAddressService} from "./geo-api-gouv-address.service";
import {TestBed} from "@angular/core/testing";
import {provideGeoApiGouv} from "./geo-api-gouv-address.providers";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {DEFAULT_GEO_API_URL} from "./geo-api-gouv-address.tokens";

describe('GeoApiGouvAddressProviders', () => {
  let service: GeoApiGouvAddressService;

  it('should inject default url', () => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [provideGeoApiGouv()]
      });

      service = TestBed.inject(GeoApiGouvAddressService);
      // @ts-ignore
      expect(service.apiUrl).toBe(DEFAULT_GEO_API_URL);
  });

  it('should inject custom url', () => {
      const apiUrl = 'https://data.geopf.fr/custom';

      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [provideGeoApiGouv(apiUrl)]
      });

      service = TestBed.inject(GeoApiGouvAddressService);
      // @ts-ignore
      expect(service.apiUrl).toBe(apiUrl);
  })
});
