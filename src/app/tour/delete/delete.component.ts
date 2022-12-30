import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit,OnChanges {
id:any;
tour:any;
  constructor(private route: ActivatedRoute,private tourService:TourService,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.tourService.findById(this.id).subscribe((data)=>{
        this.tour = data
        console.log(data)
      })
    })
this.getAll()
  }
  delete(){
    this.tourService.deleteProduct(this.id).subscribe()
    this.router.navigate(["/"]);
    this.getAll()
  }
  getAll() {
    this.tourService.getAll().subscribe()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.tourService.findById(this.id).subscribe((data)=>{
        this.tour = data
        console.log(data)
      })
    })
  }
}
