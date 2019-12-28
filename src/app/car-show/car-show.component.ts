import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../shared/car/car.service';
import { CarType } from '../model/car-type';

@Component({
  selector: 'msa-car-show',
  templateUrl: './car-show.component.html',
  styleUrls: ['./car-show.component.scss']
})
export class CarShowComponent implements OnInit {
  car: Car = new Car(1, 'Dummy' , new CarType(3, 300, 400, 'Lux'));
  constructor( private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit() {
    console.log('inside ngOnInit of car show. ');
    const carId = this.route.snapshot.params.id;
    console.log('inside ngOnInit of car show. Car Id passed :: ' + carId);
    this.carService.getCar(carId).subscribe(returnedCar => {
      console.log('Returned car ' + returnedCar);
      this.car = returnedCar;
    });
    console.log('Returned car ' + this.car.carType);
  }

}
