import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Delivery, Response} from './delivery.interface';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URL = '/results';

  constructor(private http: HttpClient) {
  }

  public getAll$(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(this.API_URL);
  }

  public getOne$(id): Observable<Delivery> {
    return this.http.get<Delivery>(`${this.API_URL}/${id}`).pipe(tap(console.log));
  }

  public remove$(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(tap(console.log));
  }

  public edit$(id: number, delivery: Delivery): Observable<any> {
    return this.http.put(`${this.API_URL}/${id}`, delivery).pipe(tap(console.log));
  }
}
