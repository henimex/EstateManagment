import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  propertyId: number;
  ngOnInit(): void {
    this.asaignParams();
  }

  asaignParams() {
    this.activatedRoute.params.subscribe((params) => {
      //this.propertyId = parseInt(params['propertyId']);
      this.propertyId = + params['propertyId']; //that pluss converts string to int.. its fkn awesome
      //if it converts to number could - convert to string...
    });
  }

  asaignParamsAlternative() {
    this.propertyId = this.activatedRoute.snapshot.params['propertyId'];
  }

  onSelectNext() {
    this.propertyId += 1;
    //this.router.navigate(['detail-property', this.propertyId], {relativeTo:this.router});
    this.router.navigate(['detail-property', this.propertyId]);
  }
}
