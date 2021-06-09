import {Component} from '@angular/core';
import {Delivery} from '../services/delivery.interface';
import {DataService} from '../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(public router: Router, private dataService: DataService) {
  }

  saveCreate(newDelivery: Delivery): void {
    this.dataService.create$(newDelivery).subscribe(({id}) => {
      this.router.navigate(['/', 'delivery', id]);
    });
  }

  cancelCreate(): void {
    this.router.navigate(['/']);
  }

}
