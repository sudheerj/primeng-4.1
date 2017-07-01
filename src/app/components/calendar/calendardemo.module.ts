import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {GrowlModule} from 'primeng/components/growl/growl';
import {CalendarDemoRoutingModule} from './calendardemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {CalendarDemoComponent} from './calendardemo.component';


@NgModule({
  imports: [
    CalendarModule,
    CalendarDemoRoutingModule,
    WizardModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    CalendarDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class CalendarDemoModule {
}
