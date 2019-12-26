import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../shared/car/car.service';

@Component({
  selector: 'msa-car-show',
  templateUrl: './car-show.component.html',
  styleUrls: ['./car-show.component.scss']
})
export class CarShowComponent implements OnInit {
  car: Car;
  constructor( private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit() {
    console.log('inside ngOnInit of car show. ');
    const carId = this.route.snapshot.params.id;
    console.log('inside ngOnInit of car show. Car Id passed :: ' + carId);
    this.carService.getCar(carId).subscribe(returnedCar => {
      this.car = returnedCar;
    });
  }

}
