import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Delivery} from '../services/delivery.interface';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public delivery: Delivery;
  public isEdit: boolean;

  constructor(protected activeRoute: ActivatedRoute, protected dataService: DataService) {
  }

  ngOnInit(): void {
    this.delivery = this.activeRoute.snapshot.data.delivery;

  }

  saveEdit(newDelivery: Delivery): void {
    this.dataService.edit$(this.delivery.id, newDelivery).subscribe(() => {
      this.delivery = newDelivery;
      this.isEdit = false;
    });
  }

  cancelEdit(): void {
    this.isEdit = false;
  }

  setEdit(): void {
    this.isEdit = true;
  }

}
