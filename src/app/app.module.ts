import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DeliveryCardComponent } from './delivery-card/delivery-card.component';
import { DetailComponent } from './detail/detail.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateComponent } from './create/create.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryCardComponent,
    DetailComponent,
    DeliveryListComponent,
    NotFoundComponent,
    CreateComponent,
    DeliveryFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
