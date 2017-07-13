import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {InputMaskModule} from 'primeng/components/inputmask/inputmask';
import {GrowlModule} from 'primeng/components/growl/growl';
import {InputMaskDemoRoutingModule} from './inputmaskdemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {InputMaskDemoComponent} from './inputmaskdemo.component';


@NgModule({
    imports: [
      InputMaskModule,
      InputMaskDemoRoutingModule,
        WizardModule,
        GrowlModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
      InputMaskDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class InputMaskDemoModule {
}
