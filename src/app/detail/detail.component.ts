import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Delivery} from '../services/delivery.interface';
import {DataService} from '../services/data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public delivery: Delivery;
  public isEdit: boolean;
  public editForm: FormGroup;

  constructor(protected activeRoute: ActivatedRoute, protected dataService: DataService, private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.delivery = this.activeRoute.snapshot.data.delivery;

  }

  saveEdit(form: FormGroup): void {
    this.dataService.edit$(this.delivery.id, form.value).subscribe(() => {
      this.delivery = {...form.value, id: this.delivery.id};
      this.isEdit = false;
    });
  }

  cancelEdit(): void {
    this.isEdit = false;

  }

  setEdit(): void {
    this.editForm = this.fb.group({
      name: [this.delivery.name, [Validators.required, Validators.max(200)]],
      address: [this.delivery.address, [Validators.required, Validators.max(300)]],
    });
    this.isEdit = true;

  }

}
