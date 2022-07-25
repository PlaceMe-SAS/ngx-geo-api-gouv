# @placeme/ngx-geo-api-gouv-address

[![Build Status](https://travis-ci.com/PlaceMe-SAS/ngx-geo-api-gouv.svg?branch=master)](https://travis-ci.com/PlaceMe-SAS/ngx-geo-api-gouv)

## Introduction

`@placeme/ngx-geo-api-gouv-address` is the Angular module to use the Geo Api of the French government.

See the REST api definition : [`https://geo.api.gouv.fr/adresse`](https://geo.api.gouv.fr/adresse).

## Maintainer

[https://www.placeme.io/](https://www.placeme.io/)

![alt text](https://res.cloudinary.com/placeme/image/upload/v1539976689/logo/logo-violet.png)

## Installation

First you need to install the npm module:

```sh
npm install @placeme/ngx-geo-api-gouv-address --save
npm install geojson --save
```

Use version 1 for Angular version 9 to 12.  
Use version 2 for Angular version 13 and above

## Usage

### 1. Import the `GeoApiGouvAddressModule`:

Finally, you can use ngx-translate in your Angular project. You have to import `GeoApiGouvAddressModule.forRoot()` in the root NgModule of your application.

The [`forRoot`](https://angular.io/api/router/RouterModule#forroot) static method is a convention that provides and configures services at the same time.
Make sure you only call this method in the root module of your application, most of the time called `AppModule`.

```ts
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GeoApiGouvAddressModule } from "@placeme/ngx-geo-api-gouv-address";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, GeoApiGouvAddressModule.forRoot()],
})
export class AppModule {}
```

### 2. Use the `GeoApiGouvAddressService`:

```ts
import { Component, OnInit } from "@angular/core";
import {
  GeoApiGouvAddressResponse,
  GeoApiGouvAddressService,
} from "@placeme/ngx-geo-api-gouv-address";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private geoApiGouvAddressService: GeoApiGouvAddressService) {}

  ngOnInit(): void {
    // Search API
    this.geoApiGouvAddressService
      .query({ q: "27 rue des Blanchers, 31000 Toulouse" })
      .subscribe((geoApiGouvAddressResponse: GeoApiGouvAddressResponse) => {
        console.log(geoApiGouvAddressResponse);
      });

    // Reverse API
    this.geoApiGouvAddressService
      .reverse({ lat: 43.602508, lon: 1.437591 })
      .subscribe((geoApiGouvAddressResponse: GeoApiGouvAddressResponse) => {
        console.log(geoApiGouvAddressResponse);
      });
  }
}
```

### 4. See the interface `QueryRequestParams`:

```ts
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
```

### 5. See the interface `ReverseRequestParams`:

```ts
interface ReverseRequestParams {
  lat: number;
  lon: number;
  type?: GeoApiGouvAddressType;
}
```

### 6. See the interface `GeoApiGouvAddressResponse`:

```ts
import { Feature, FeatureCollection } from "geojson";

export type GeoApiGouvAddressType =
  | "housenumber"
  | "street"
  | "locality"
  | "municipality";

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
```
