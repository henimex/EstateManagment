import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProperty } from '../Abstracts/iproperty';
import { map } from 'rxjs/operators';
import { ListResponseModel } from '../models/responseModels/ListResponseModel';
import { Property } from '../models/property';

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
        for (const id in response) {
          if (response.hasOwnProperty(id)) {
            propertiesArray.push();
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
    console.log('')
    return this.http.get<Property[]>(this.apiUrl)
  }
}
