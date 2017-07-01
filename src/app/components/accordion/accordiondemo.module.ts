import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {AccordionModule} from 'primeng/components/accordion/accordion';
import {GrowlModule} from 'primeng/components/growl/growl';
import {AccordionDemoRoutingModule} from './accordiondemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {AccordionDemoComponent} from './accordiondemo.component';


@NgModule({
  imports: [
    AccordionModule,
    AccordionDemoRoutingModule,
    WizardModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    AccordionDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class AccordionDemoModule {
}
