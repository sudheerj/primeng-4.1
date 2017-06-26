import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {GrowlModule} from 'primeng/components/growl/growl';
import {DropdownDemoRoutingModule} from './dropdowndemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {DropdownDemoComponent} from './dropdowndemo.component';


@NgModule({
    imports: [
        DropdownModule,
        DropdownDemoRoutingModule,
        WizardModule,
        GrowlModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
      DropdownDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class DropdownDemoModule {
}
