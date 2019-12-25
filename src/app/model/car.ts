import { CarType } from './car-type';

export class Car {
    constructor(
    public id: number,
    public name: string,
    public carType: CarType) {}
    static adapt(item: any): Car {
        return new Car(item.id, item.name,
            new CarType(item.carType.id, item.carType.priceMin, item.carType.priceMax, item.carType.category));
    }
}
