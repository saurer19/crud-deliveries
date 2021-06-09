import {fakeAsync, TestBed} from '@angular/core/testing';

import {DataService} from './data.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;
  const mockDeliveries = [{
    name: 'Cecilia Chapman',
    address: 'Mankato Mississippi 96523',
    id: 3
  },
    {
      name: 'Calista Wise',
      address: 'San Antonio MI 47096',
      id: 5
    }];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]

    });
    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return an Observable<User[]>', fakeAsync(() => {

    service.getAll$().subscribe(deliveries => {
      expect(deliveries.length).toBe(2);
      expect(deliveries).toEqual(mockDeliveries);
    });
    const req = httpTestingController.expectOne('/results');
    expect(req.request.method).toEqual('GET');
    req.flush(mockDeliveries);
    httpTestingController.verify();

  }));
});
