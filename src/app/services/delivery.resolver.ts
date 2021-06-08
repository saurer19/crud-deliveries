import {Delivery} from './delivery.interface';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from './data.service';

@Injectable({ providedIn: 'root' })
export class DeliveryResolver implements Resolve<Delivery> {
  constructor(private dataService: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Delivery> {
    return this.dataService.getOne$(route.paramMap.get('id'));
  }
}
