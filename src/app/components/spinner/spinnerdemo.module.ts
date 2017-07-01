import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {SpinnerModule} from 'primeng/components/spinner/spinner';
import {GrowlModule} from 'primeng/components/growl/growl';
import {SpinnerDemoRoutingModule} from './spinnerdemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {SpinnerDemoComponent} from './spinnerdemo.component';


@NgModule({
  imports: [
    SpinnerModule,
    SpinnerDemoRoutingModule,
    WizardModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    SpinnerDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class SpinnerDemoModule {
}
