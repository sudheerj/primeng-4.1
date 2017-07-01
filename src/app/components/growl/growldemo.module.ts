import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {GrowlModule} from 'primeng/components/growl/growl';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlDemoRoutingModule} from './growldemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {GrowlDemoComponent} from './growldemo.component';


@NgModule({
  imports: [
    GrowlDemoRoutingModule,
    WizardModule,
    GrowlModule,
    ButtonModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    GrowlDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class GrowlDemoModule {
}
