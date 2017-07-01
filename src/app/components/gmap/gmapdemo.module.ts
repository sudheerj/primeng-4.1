import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {GMapModule} from 'primeng/components/gmap/gmap';
import {GrowlModule} from 'primeng/components/growl/growl';
import {GmapDemoRoutingModule} from './gmapdemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {GmapDemoComponent} from './gmapdemo.component';


@NgModule({
  imports: [
    GmapDemoRoutingModule,
    WizardModule,
    GMapModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    GmapDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class GmapDemoModule {
}
