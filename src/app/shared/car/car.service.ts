import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import { Car } from 'src/app/model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  /**
   * log a CarService messages
   */
  private log(message: string) {
    console.log(message);
  }

  constructor(private  http: HttpClient) { }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /**
   * Get all cars from the back-end service
   */
  getAllCars(): Observable<Car[]> {
    const url = '/server/api/v1/cars-social/getAllCars/';
    console.log(url);
    // TODO
    // return of([]);
    return this.http.get<any[]>(url).pipe(
      // Adapt each item in the raw data array. It uses Model-Adapter pattern
      map(data => data.map(Car.adapt)),
        catchError(this.handleError<Car[]>('getAllCars() Spring REST API '))
    );
    /* how to handle error scenarios?
     return this.http.get<User>(url).pipe(
      tap(() => UserService.log('Fetched User by email = ${email}')),
      catchError(this.handleError<User>('getUserByUserEmail = ${email}'))
    );
    */
  } // end of getAllCars method
  getCar(id: number): Observable<Car> {
    // TODO
    // return of(new Car(2, 'Tesla', null));
    const url = '/server/api/v1/cars-social/getCar/' + id;

    return this.http.get<any>(url).pipe(
      tap(() => this.log('Fetched one car. ')),
        catchError(this.handleError<Car[]>('getCar() = ${id}'))
    );
  }
} // end of CarService class
