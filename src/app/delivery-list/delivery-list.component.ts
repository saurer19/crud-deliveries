import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Delivery} from '../services/delivery.interface';
import {take} from 'rxjs/operators';
import {DataService} from '../services/data.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit, OnDestroy {
  private remove$: Subscription;
  public deliveryList$: Observable<Delivery[]>;

  constructor(protected dataService: DataService) {
  }

  ngOnInit(): void {
    this.getDeliveries();
  }

  protected getDeliveries(): void {
    this.deliveryList$ = this.dataService.getAll$();
  }

  deleteDelivery(id): void {
    this.remove$ = this.dataService.remove$(id).pipe(take(1)).subscribe(() => {
      this.getDeliveries();
    });
  }

  ngOnDestroy(): void {
    if (this.remove$) {
      this.remove$.unsubscribe();
    }
  }

}
