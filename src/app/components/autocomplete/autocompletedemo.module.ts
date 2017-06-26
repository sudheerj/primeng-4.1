import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {AutoCompleteModule} from 'primeng/components/autocomplete/autocomplete';
import {GrowlModule} from 'primeng/components/growl/growl';
import {AutocompleteDemoRoutingModule} from './autocompletedemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {AutocompleteDemoComponent} from './autocompletedemo.component';


@NgModule({
  imports: [
    AutoCompleteModule,
    AutocompleteDemoRoutingModule,
    WizardModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    AutocompleteDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class AutocompleteDemoModule {
}
