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


  it('values should be updated after saving them', fakeAsync(() => {
    spyOn(service, 'edit$').and.returnValue(of({}));
    component.setEdit();
    fixture.detectChanges();
    component.saveEdit({name: 'Testing Guy', address: 'This is a real address', id: 5});
    tick();
    expect(component.delivery.name).toBe('Testing Guy');
    expect(component.delivery.address).toBe('This is a real address');
  }));
});
