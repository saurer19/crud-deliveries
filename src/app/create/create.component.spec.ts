import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {CreateComponent} from './create.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {DataService} from '../services/data.service';
import {DetailComponent} from '../detail/detail.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let service: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateComponent],
      imports: [
        RouterTestingModule.withRoutes(
          [{path: 'delivery/:id', component: DetailComponent}]
        ),
        HttpClientTestingModule
      ],
      providers: [DataService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('edit valid form values', fakeAsync(() => {
    spyOn(service, 'create$').and.returnValue(of({name: 'Testing Guy', address: 'This is a real address', id: 3}));
    component.saveCreate({name: 'Testing Guy', address: 'This is a real address', id: null});
    expect(service.create$).toHaveBeenCalled();
  }));
});
