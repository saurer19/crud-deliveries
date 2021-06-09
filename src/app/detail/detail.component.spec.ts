import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DetailComponent} from './detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {of} from 'rxjs';
import {DataService} from '../services/data.service';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let service: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [{
        DataService,
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            data: {
              delivery: {
                name: 'Calista Wise',
                address: 'San Antonio MI 47096',
                id: 5
              }
            }
          }
        }
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DataService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('editing valid form values', () => {
    component.setEdit();
    fixture.detectChanges();
    component.editForm.controls['name'].setValue('Testing Guy');
    component.editForm.controls['address'].setValue('This is a real address');
    expect(component.editForm.valid).toBeTruthy();
  });
  it('editing invalid form values', () => {
    component.setEdit();
    fixture.detectChanges();
    component.editForm.controls['name'].setValue('');
    component.editForm.controls['address'].setValue('This is a real address');
    expect(component.editForm.valid).toBeFalsy();
  });

  it('edit valid form values', fakeAsync(() => {
    spyOn(service, 'edit$').and.returnValue(of({}))
    component.setEdit();
    fixture.detectChanges();
    component.editForm.controls['name'].setValue('Testing Guy');
    component.editForm.controls['address'].setValue('This is a real address');
    let button = fixture.debugElement.nativeElement.querySelector('#submit');
    console.log(button)
    button.click();
    tick();
    expect(component.delivery.name).toBe('Testing Guy');
    expect(component.delivery.address).toBe('This is a real address');
  }));
});
