# @placeme/ngx-geo-api-gouv-address

[![Build Status](https://travis-ci.com/PlaceMe-SAS/ngx-geo-api-gouv.svg?branch=master)](https://travis-ci.com/PlaceMe-SAS/ngx-geo-api-gouv)

## Introduction

`@placeme/ngx-geo-api-gouv-address` is the Angular module to use the Geo Api of the French government.

See the REST api definition : [`https://geo.api.gouv.fr/adresse`](https://geo.api.gouv.fr/adresse).

## Maintainer

[https://www.placeme.io/](https://www.placeme.io/)

![alt text](https://res.cloudinary.com/placeme/image/upload/v1539976689/logo/logo-violet.png)

## Table of Contents
- [Installation](#installation)
- [Notes](#notes)
- [Usage](#usage)
  - [1a. Standalone Application (AppConfig)](#1a-standalone-application-appconfig)
  - [1b. Import in a Root Module (NgModule)](#1b-import-in-a-root-module-ngmodule)
- [Service Usage](#2-use-the-geoapigouvaddressservice)
- [API Reference](#3-see-the-interface-queryrequestparams)

## Installation

First you need to install the npm module:

```sh
npm install @placeme/ngx-geo-api-gouv-address --save
npm install geojson --save
```

Use version 1 for Angular version 9 to 12.  
Use version 2 for Angular version 13 and above and Ivy engine.  
For Angular version 14 and above, you can also use the version having the same major number.

## Notes

- This library supports both **NgModule** (`forRoot()`) and **AppConfig/Standalone** (`provideGeoApiGouvAddress()`) approaches.
- You can provide a custom API URL or use the default one.
- See section **1a** for AppConfig/Standalone and **1b** for AppModule/NgModule usage.

---

## Usage

### 1a. Standalone Application (AppConfig)

For standalone apps, provide the service when bootstrapping:

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideGeoApiGouvAddress } from '@placeme/ngx-geo-api-gouv-address';

bootstrapApplication(AppComponent, {
  providers: [
    provideGeoApiGouvAddress(), // default URL
    // provideGeoApiGouvAddress('https://my.custom.api/adresses') // custom URL
  ],
});
```

### 1b. Import in a Root Module (NgModule)

Import `GeoApiGouvAddressModule.forRoot()` in your root NgModule (`AppModule`) to configure the service:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GeoApiGouvAddressModule } from '@placeme/ngx-geo-api-gouv-address';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GeoApiGouvAddressModule.forRoot(), // default URL
    // GeoApiGouvAddressModule.forRoot('https://my.custom.api/adresses') // custom URL
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

> Only call `forRoot()` in the root module to provide and configure services.

### 2. Use the `GeoApiGouvAddressService`:

```ts
import { Component, OnInit } from "@angular/core";
import { GeoApiGouvAddressResponse, GeoApiGouvAddressService } from "@placeme/ngx-geo-api-gouv-address";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private geoApiGouvAddressService: GeoApiGouvAddressService) {}

  ngOnInit(): void {
    // Search API
    this.geoApiGouvAddressService.query({ q: "27 rue des Blanchers, 31000 Toulouse" }).subscribe((geoApiGouvAddressResponse: GeoApiGouvAddressResponse) => {
      console.log(geoApiGouvAddressResponse);
    });

    // Reverse API
    this.geoApiGouvAddressService.reverse({ lat: 43.602508, lon: 1.437591 }).subscribe((geoApiGouvAddressResponse: GeoApiGouvAddressResponse) => {
      console.log(geoApiGouvAddressResponse);
    });
  }
}
```

### 3. See the interface `QueryRequestParams`:

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

### 4. See the interface `ReverseRequestParams`:

```ts
interface ReverseRequestParams {
  lat: number;
  lon: number;
  type?: GeoApiGouvAddressType;
}
```

### 5. See the interface `GeoApiGouvAddressResponse`:

```ts
import { Feature, FeatureCollection } from "geojson";

export type GeoApiGouvAddressType = "housenumber" | "street" | "locality" | "municipality";

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
