import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf,
} from '@angular/core';

import { GeoApiGouvAddressService } from './geo-api-gouv-address.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [],
})
export class GeoApiGouvAddressModule {
  constructor(@Optional() @SkipSelf() parentModule?: GeoApiGouvAddressModule) {
    if (parentModule) {
      throw new Error(
        'GeoApiGouvAddressModule is already loaded. Import it in the AppModule only'
      );
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GeoApiGouvAddressModule,
      providers: [GeoApiGouvAddressService],
    };
  }
}
