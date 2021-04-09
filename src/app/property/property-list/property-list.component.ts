import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: any;

  constructor(private housingService:HousingService) {}
  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(){
    this.housingService.getAllProperties().subscribe(response => {
      this.properties = response
    },error => {
      console.log("Error Handling v1.1 : "+ error.message);
      console.log(error);
    })
  }
}
