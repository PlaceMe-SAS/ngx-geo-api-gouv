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
export class GeoApiGouvAdressModule {
  constructor(@Optional() @SkipSelf() parentModule?: GeoApiGouvAdressModule) {
    if (parentModule) {
      throw new Error(
        'GeoApiGouvAdressModule is already loaded. Import it in the AppModule only'
      );
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GeoApiGouvAdressModule,
      providers: [GeoApiGouvAddressService],
    };
  }
}
