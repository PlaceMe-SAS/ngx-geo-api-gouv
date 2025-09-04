import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { GeoApiGouvAddressService } from './geo-api-gouv-address.service';
import { GEO_GOUV_API_URL } from './geo-api-gouv-address.tokens';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: []
})
export class GeoApiGouvAddressModule {
  constructor(@Optional() @SkipSelf() parentModule?: GeoApiGouvAddressModule) {
    if (parentModule) {
      throw new Error('GeoApiGouvAddressModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(apiUrl?: string): ModuleWithProviders<GeoApiGouvAddressModule> {
    return {
      ngModule: GeoApiGouvAddressModule,
      providers: [GeoApiGouvAddressService, ...(apiUrl ? [{ provide: GEO_GOUV_API_URL, useValue: apiUrl }] : [])]
    };
  }
}
