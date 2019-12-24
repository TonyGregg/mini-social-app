import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { Router } from '@angular/router';
import { CarService } from '../shared/car/car.service';

@Component({
  selector: 'msa-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars: Car[];

  constructor( private router: Router, private carService: CarService) { }

  ngOnInit() {
    console.log('Inside ngOnInit of Car List');
    this.carService.getAllCars().subscribe(returnedCars => {
      this.cars = returnedCars;
    });
  }

}
