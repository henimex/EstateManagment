import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})
export class PropertyAddComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['/'])
  }

}
