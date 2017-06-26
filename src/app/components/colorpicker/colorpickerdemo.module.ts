import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {ColorPickerModule} from 'primeng/components/colorpicker/colorpicker';
import {GrowlModule} from 'primeng/components/growl/growl';
import {ColorPickerDemoRoutingModule} from './colorpickerdemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {ColorPickerDemoComponent} from './colorpickerdemo.component';


@NgModule({
    imports: [
        ColorPickerModule,
        ColorPickerDemoRoutingModule,
        WizardModule,
        GrowlModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
      ColorPickerDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class ColorPickerDemoModule {
}
