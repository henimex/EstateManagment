import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Property[];

  constructor(private housingService:HousingService) {}
  ngOnInit(): void {
    //this.getProperties();
    this.getPropertiesResponse();
    this.getAllSingle();
  }

  getProperties(){
    this.housingService.getAllProperties().subscribe(response => {
      this.properties = response
    },error => {
      console.log("Error Handling v1.1 : "+ error.message);
      console.log(error);
    })
  }

  getPropertiesResponse(){
    this.housingService.getAll().subscribe(response => {
      this.properties = response.data
    },error => {
      console.log("Error Handling v1.1 : "+ error.message);
      console.log(error);
    })
  }

  getAllSingle(){
    this.housingService.getAllSingle().subscribe(response => {
      console.log('single')
      console.log(response)
      this.properties = response
    })
  }
}
