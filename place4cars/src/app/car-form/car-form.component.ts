import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car-service.service';
import { CarMinimal } from '../car-minimal';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent {

  car: CarMinimal;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private carService: CarService) {
    this.car = new CarMinimal();
  }

  onSubmit() {
    this.carService.save(this.car).subscribe(result => this.gotoCarList());
  }

  gotoCarList() {
    this.router.navigate(['/cars']);
  }
}