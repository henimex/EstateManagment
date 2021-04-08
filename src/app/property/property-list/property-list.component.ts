import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {

  Properties: Array<any> = [
    {
      Id: 1,
      Name: 'Suit Room',
      Type: 'Hotel',
      Price: 12000
    },
    {
      Id: 2,
      Name: 'Villa',
      Type: 'House',
      Price: 15000,
    },
    {
      Id: 3,
      Name: 'Single Apartment',
      Type: 'Apartment',
      Price: 25000,
    },
    {
      Id: 4,
      Name: 'Prefabric House',
      Type: 'House',
      Price: 1500,
    },
    {
      Id: 5,
      Name: 'Mobile House',
      Type: 'House',
      Price: 6950,
    },
    {
      Id: 6,
      Name: 'Dublex For Holiday',
      Type: 'House',
      Price: 14500,
    },
    {
      Id: 7,
      Name: 'Double Apartment',
      Type: 'Apartment',
      Price: 23500,
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
