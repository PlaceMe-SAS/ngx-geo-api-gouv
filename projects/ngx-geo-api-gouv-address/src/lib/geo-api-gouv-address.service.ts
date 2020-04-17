import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {
  GeoApiGouvAddressResponse,
  GeoApiGouvAddressType,
} from './geo-api-gouv-address.interface';

const API_ENDPOINT = 'https://api-adresse.data.gouv.fr';

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
  constructor(private httpClient: HttpClient) {}

  query(params: QueryRequestParams): Observable<GeoApiGouvAddressResponse> {
    return this.httpClient.get<GeoApiGouvAddressResponse>(
      `${API_ENDPOINT}/search/`,
      {
        params: params as any,
      }
    );
  }

  reverse(params: ReverseRequestParams): Observable<GeoApiGouvAddressResponse> {
    return this.httpClient.get<GeoApiGouvAddressResponse>(
      `${API_ENDPOINT}/reverse/`,
      {
        params: params as any,
      }
    );
  }
}
