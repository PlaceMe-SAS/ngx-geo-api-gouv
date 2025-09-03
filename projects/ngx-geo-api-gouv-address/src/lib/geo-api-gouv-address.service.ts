import { HttpClient } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';

import {
  GeoApiGouvAddressResponse,
  GeoApiGouvAddressType,
} from './geo-api-gouv-address.interface';
import {GEO_GOUV_API_URL} from "./geo-api-gouv-address.tokens";

interface QueryRequestParams {
  q: string;
  limit?: number;
  autocomplete?: number;
  lat?: number;
  lon?: number;
  type?: GeoApiGouvAddressType;
  postcode?: string;
  citycode?: string;
}

interface ReverseRequestParams {
  lat: number;
  lon: number;
  type?: GeoApiGouvAddressType;
}

@Injectable()
export class GeoApiGouvAddressService {
  private readonly apiUrl: string = inject(GEO_GOUV_API_URL);
  private httpClient = inject(HttpClient);

  query(params: QueryRequestParams): Observable<GeoApiGouvAddressResponse> {
    return this.httpClient.get<GeoApiGouvAddressResponse>(
      `${this.apiUrl}/search/`,
      { params: params as any }
    );
  }

  reverse(params: ReverseRequestParams): Observable<GeoApiGouvAddressResponse> {
    return this.httpClient.get<GeoApiGouvAddressResponse>(
      `${this.apiUrl}/reverse/`,
      { params: params as any }
    );
  }
}
