import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeliveryListComponent} from './delivery-list/delivery-list.component';
import {DetailComponent} from './detail/detail.component';
import {DeliveryResolver} from './services/delivery.resolver';

const routes: Routes = [
  {path: '', component: DeliveryListComponent},
  {
    path: 'delivery/:id', component: DetailComponent,
    resolve: {
      delivery: DeliveryResolver
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
