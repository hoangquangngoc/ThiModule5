import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Tour} from "../../model/Tour";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit,OnChanges {
  tours: Tour[] = []
  constructor(private tourService:TourService) { }

  ngOnInit(): void {
    this.tourService.getAll().subscribe((data)=>{
      this.tours = data
    })

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tourService.getAll().subscribe((data)=>{
      this.tours = data
    })
  }

}
