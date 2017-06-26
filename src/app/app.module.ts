import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {PanelMenuModule} from 'primeng/components/panelmenu/panelmenu';

import {AppComponent} from './app.component';

import {CarService} from './service/carservice';
import {CountryService} from './service/countryservice';
import {EventService} from './service/eventservice';
import {NodeService} from './service/nodeservice';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    PanelMenuModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CarService, CountryService, EventService, NodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
