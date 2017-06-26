import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {PanelModule} from 'primeng/components/panel/panel';
import {GrowlModule} from 'primeng/components/growl/growl';
import {PanelDemoRoutingModule} from './paneldemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {PanelDemoComponent} from './paneldemo.component';


@NgModule({
    imports: [
        PanelModule,
        PanelDemoRoutingModule,
        WizardModule,
        GrowlModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
      PanelDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class PanelDemoModule {
}
