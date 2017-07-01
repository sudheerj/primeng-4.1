import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {ChipsModule} from 'primeng/components/chips/chips';
import {GrowlModule} from 'primeng/components/growl/growl';
import {ChipsDemoRoutingModule} from './chipsdemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {ChipsDemoComponent} from './chipsdemo.component';


@NgModule({
    imports: [
        ChipsModule,
        ChipsDemoRoutingModule,
        WizardModule,
        GrowlModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
      ChipsDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class ChipsDemoModule {
}
