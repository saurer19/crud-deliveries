import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Delivery} from './delivery.interface';

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
    return this.http.get<Delivery>(`${this.API_URL}/${id}`);
  }

  public remove$(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  public edit$(id: number, delivery: Delivery): Observable<any> {
    return this.http.put(`${this.API_URL}/${id}`, delivery);
  }

  public create$(delivery: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>(`${this.API_URL}`, delivery);
  }
}
