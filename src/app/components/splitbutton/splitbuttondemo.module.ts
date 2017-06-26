import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {SplitButtonModule} from 'primeng/components/splitbutton/splitbutton';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlModule} from 'primeng/components/growl/growl';
import {SplitButtonDemoRoutingModule} from './splitbuttondemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {SplitButtonDemoComponent} from './splitbuttondemo.component';


@NgModule({
  imports: [
    SplitButtonModule,
    SplitButtonDemoRoutingModule,
    ButtonModule,
    WizardModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    SplitButtonDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class SplitButtonDemoModule {
}
