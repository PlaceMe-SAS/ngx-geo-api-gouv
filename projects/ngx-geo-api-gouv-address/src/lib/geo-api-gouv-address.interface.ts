import { Feature, FeatureCollection } from 'geojson';

export type GeoApiGouvAddressType = 'housenumber' | 'street' | 'locality' | 'municipality';

export interface GeoApiGouvAddress {
  id: string;
  type: GeoApiGouvAddressType;
  score: number;
  housenumber?: string;
  name?: string;
  postcode: string;
  citycode: string;
  city: string;
  district?: string;
  oldcitycode?: string;
  oldcity?: string;
  context: string;
  label: string;
  x: number;
  y: number;
  importance: number;
}

export interface GeoApiGouvAddressFeatureCollection extends Feature {
  properties: GeoApiGouvAddress;
}

export interface GeoApiGouvAddressResponse extends FeatureCollection {
  features: GeoApiGouvAddressFeatureCollection[];
}
