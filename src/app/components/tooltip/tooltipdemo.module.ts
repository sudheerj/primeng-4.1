import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {GrowlModule} from 'primeng/components/growl/growl';
import {TooltipDemoRoutingModule} from './tooltipdemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {TooltipDemoComponent} from './tooltipdemo.component';


@NgModule({
    imports: [
        TooltipModule,
        TooltipDemoRoutingModule,
        WizardModule,
        GrowlModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
      TooltipDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class TooltipDemoModule {
}
