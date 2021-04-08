import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  @Input() property: any;

  // Property: any = {
  //   Id: 1,
  //   Name: 'Bahçeli Ev',
  //   Type: 'House',
  //   Price: 12000,
  // };

  constructor() {}

  ngOnInit(): void {}
}
