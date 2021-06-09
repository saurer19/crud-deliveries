import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Delivery} from '../services/delivery.interface';
import {DataService} from '../services/data.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-delivery-card',
  templateUrl: './delivery-card.component.html',
  styleUrls: ['./delivery-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DeliveryCardComponent {
  @Input() delivery: Delivery;
  @Output() emitDelete = new EventEmitter<number>();

  public removeDelivery(id): void {
    this.emitDelete.emit(id);
  }
}
