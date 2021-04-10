import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})
export class PropertyAddComponent implements OnInit {
  @ViewChild('Form') addPropertyForm:NgForm;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['/'])
  }

  onSubmit(){
    console.log("Submit Works")
    console.log(this.addPropertyForm)
  }

}
