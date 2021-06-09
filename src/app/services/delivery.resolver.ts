import {Delivery} from './delivery.interface';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DataService} from './data.service';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DeliveryResolver implements Resolve<Delivery> {
  constructor(private dataService: DataService, private router: Router) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Delivery> {
    return this.dataService.getOne$(route.paramMap.get('id')).pipe(
      catchError((err) => {
          this.router.navigate(['/404']);
          return of(null);
        }
      )
    );
  }
}
