import {EnvironmentProviders, makeEnvironmentProviders} from "@angular/core";
import {GeoApiGouvAddressService} from "./geo-api-gouv-address.service";
import {GEO_GOUV_API_URL} from "./geo-api-gouv-address.tokens";

export function provideGeoApiGouv(apiUrl?: string): EnvironmentProviders {
  return makeEnvironmentProviders([
    GeoApiGouvAddressService,
    ...(apiUrl ? [{provide: GEO_GOUV_API_URL, useValue: apiUrl}] : [])
  ])
}
