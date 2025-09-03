import {TestBed} from "@angular/core/testing";
import {GeoApiGouvAddressModule} from "./geo-api-gouv-address.module";
import {GeoApiGouvAddressService} from "./geo-api-gouv-address.service";
import {DEFAULT_GEO_API_URL} from "./geo-api-gouv-address.tokens";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('GeoApiGouvAddressModule', () => {
  let service: GeoApiGouvAddressService;

  it('should inject default url', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,GeoApiGouvAddressModule.forRoot()]
    })

    service = TestBed.inject(GeoApiGouvAddressService);

    // @ts-ignore
    expect(service.apiUrl).toBe(DEFAULT_GEO_API_URL);
  })
  it('should inject custom url', () => {
    const apiUrl = 'https://data.geopf.fr/custom';

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,GeoApiGouvAddressModule.forRoot(apiUrl)]
    });

    service = TestBed.inject(GeoApiGouvAddressService);
    // @ts-ignore
    expect(service.apiUrl).toBe(apiUrl);
  });

});
