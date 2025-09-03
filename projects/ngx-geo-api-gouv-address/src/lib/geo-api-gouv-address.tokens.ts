import {InjectionToken} from "@angular/core";

export const DEFAULT_GEO_API_URL = 'https://data.geopf.fr/geocodage';

export const GEO_GOUV_API_URL = new InjectionToken<string>('GEO_GOUV_API_URL',{
  providedIn: "root",
  factory: () => DEFAULT_GEO_API_URL,
})
