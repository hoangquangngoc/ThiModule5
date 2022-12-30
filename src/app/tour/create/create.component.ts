import { Component, OnInit } from '@angular/core';
import {TourService} from "../../service/tour.service";
import {FormControl, FormGroup, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
import { Router } from '@angular/router';
import {Tour} from "../../model/Tour";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private tourService:TourService,private router: Router) { }

  ngOnInit(): void {
    this.getAll()
  }
  createForm = new FormGroup({
    id: new FormControl,
    title: new FormControl(""),
    price: new FormControl(""),
    description: new FormControl(""),
  })
  getAll() {
  this.tourService.getAll().subscribe()
  }

  create(){
  this.tourService.saveProduct(this.createForm.value).subscribe()
    this.createForm.reset()
    this.router.navigate(["/"]);
    this.getAll()
  }
}
