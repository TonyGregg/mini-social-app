import { Car } from './car';

export class CarType {
    constructor(
        public id: number,
        public priceMin: number,
        public priceMax: number,
        public category: string
        ) {       }

}
