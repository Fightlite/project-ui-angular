import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { InformationComponent } from './pages/home/information/information.component';
import { RemitComponent } from './pages/home/remit/remit.component';
import { TaxComponent } from './pages/home/tax/tax.component';
import { PaymentComponent } from './pages/home/payment/payment.component';
import { AdditionalInformationComponent } from './pages/home/additional-information/additional-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformationComponent,
    RemitComponent,
    TaxComponent,
    PaymentComponent,
    AdditionalInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
