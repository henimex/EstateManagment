import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProperty } from '../Abstracts/iproperty';
import { map } from 'rxjs/operators';
import { Property } from '../models/property';
import { ListResponseModel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  apiUrl='assets/data/properties.json';
  constructor(private http: HttpClient) {}

  getAllProperties(): Observable<IProperty[]> {
    return this.http.get('assets/data/properties.json').pipe(
      map((response) => {
        const propertiesArray: Array<IProperty> = [];
        for (const i in response) {
          if (response.hasOwnProperty(i)) {
            //propertiesArray.push(response[i])
          }
        }
        return propertiesArray;
      })
    );
  }

  getAll(): Observable<ListResponseModel<Property>> {
    return this.http.get<ListResponseModel<Property>>(this.apiUrl)
  }

  getAllSingle(): Observable<Property[]> {
    return this.http.get<Property[]>(this.apiUrl)
  }

  // getAllSinglePiped(): Observable<Property[]> {
  //   return this.http.get<Property[]>.pipe(filter(Property.SellRent===1))(this.apiUrl)
  // }
}
