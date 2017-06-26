import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {GrowlModule} from 'primeng/components/growl/growl';
import {InputTextareaDemoRoutingModule} from './textareademo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {InputTextareaDemoComponent} from './textareademo.component';


@NgModule({
  imports: [
    InputTextareaModule,
    InputTextareaDemoRoutingModule,
    WizardModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    InputTextareaDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class InputTextareaDemoModule {
}
