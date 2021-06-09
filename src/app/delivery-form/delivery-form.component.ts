import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Delivery} from '../services/delivery.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {
  @Input() delivery: Delivery;
  @Output() emitDelivery = new EventEmitter<Delivery>();
  @Output() emitCancel = new EventEmitter()
  public deliveryForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.deliveryForm = this.fb.group({
      name: [this.delivery ? this.delivery.name : '', [Validators.required, Validators.max(200)]],
      address: [this.delivery ? this.delivery.address : '', [Validators.required, Validators.max(300)]],
    });
  }

  public onSubmit(form: FormGroup): void {
    const newDelivery: Delivery = {...form.value, id: this.delivery ? this.delivery.id : null};
    this.emitDelivery.emit(newDelivery);
  }

}
