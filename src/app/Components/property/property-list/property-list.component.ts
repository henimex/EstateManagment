import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/models/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Property[];
  propertiesForRent : Property[]=[];
  propertiesForSale : Property[]=[];
  typeId:number

  constructor(
    private housingService:HousingService,
    private activatedRoute:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.getAllSingleRM();
    this.arrangeParams();
  }

  arrangeParams(){
    this.activatedRoute.params.subscribe(params=>{
      this.typeId = +params['propertyType']
    })
  }

  getProperties(){
    this.housingService.getAllProperties().subscribe(response => {
      this.properties = response
    },error => {
      console.log("Error Handling v1.1 : "+ error.message);
      console.log(error);
    })
  }

  getPropertiesWithResponseModel(){
    this.housingService.getAll().subscribe(response => {
      this.properties = response.data
      console.log(response.data)
    },error => {
      console.log("Error Handling v1.1 : "+ error.message);
      console.log(error);
    })
  }

  getAllSingleRM(){
    this.housingService.getAllSingle().subscribe(response => {
      this.properties = response
    })
  }

  getUrlSnapshot(){
    this.activatedRoute.snapshot.url.toString()
  }

  //#region Disabled Codes
  filterTryWithoutPipe(propType: number){
    this.housingService.getAllSingle().subscribe(response => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].SellRent === propType) {
          this.propertiesForRent.push(response[i])
        }else if ( response[i].SellRent === propType){
          this.propertiesForSale.push(response[i])
        }
      }
      if (propType == 1) {
        this.properties = [];
        this.properties = this.propertiesForRent
      }else if (propType == 2){
        this.properties = [];
        this.properties = this.propertiesForSale
      }
      console.log(this.propertiesForRent)
      console.log(this.propertiesForSale)
    })
  }

  // getAllSingleByRentalId(id: Property){
  //   this.housingService.getAllSingle().filter((rental) => Property.rental) subscribe(response => {
  //     this.properties = response
  //   })
  // }
  //#endregion
}
