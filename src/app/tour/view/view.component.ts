import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
id:any;
tour:any;
  constructor(private route: ActivatedRoute,private tourService:TourService,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.tourService.findById(this.id).subscribe((data)=>{
        this.tour = data

      })
    })

  }
}
