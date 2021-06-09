import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeliveryFormComponent} from './delivery-form.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('DeliveryFormComponent', () => {
  let component: DeliveryFormComponent;
  let fixture: ComponentFixture<DeliveryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveryFormComponent],
      imports: [ReactiveFormsModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('editing valid form values', () => {
    component.deliveryForm.controls['name'].setValue('Testing Guy');
    component.deliveryForm.controls['address'].setValue('This is a real address');
    expect(component.deliveryForm.valid).toBeTruthy();
  });
  it('editing invalid form values', () => {
    component.deliveryForm.controls['name'].setValue('');
    component.deliveryForm.controls['address'].setValue('This is a real address');
    expect(component.deliveryForm.valid).toBeFalsy();
  });
});
