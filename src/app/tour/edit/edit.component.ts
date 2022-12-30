import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  editForm: any;
  tour:any;

  constructor(private tourService: TourService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.tourService.findById(this.id).subscribe((data) => {
        this.tour = data
        this.editForm = new FormGroup({
          id: new FormControl,
          title: new FormControl(data.title),
          price: new FormControl(data.price),
          description: new FormControl(data.description),
        })
      })
    })
    this.getAll()
  }
edit(){
this.tourService.updateProduct(this.id,this.editForm.value).subscribe();
this.router.navigate(["/"]);
this.getAll()
}
  getAll() {
    this.tourService.getAll().subscribe()
  }
}
