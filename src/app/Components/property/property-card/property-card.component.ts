import { Component, Input, OnInit, Output } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  @Input() property: Property;

  // Property: any = {
  //   Id: 1,
  //   Name: 'Bahçeli Ev',
  //   Type: 'House',
  //   Price: 12000,
  // };

  constructor() {}

  ngOnInit(): void {}
}
