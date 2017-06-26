import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {OrganizationChartModule} from 'primeng/components/organizationchart/organizationchart';
import {GrowlModule} from 'primeng/components/growl/growl';
import {OrganizationChartDemoRoutingModule} from './organizationchartdemo-routing.module';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {VCardService} from './service/vcard.service';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {OrganizationChartDemoComponent} from './organizationchartdemo.component';


@NgModule({
    imports: [
        OrganizationChartModule,
        OrganizationChartDemoRoutingModule,
        WizardModule,
        GrowlModule,
        FormsModule,
        CommonModule,
        DialogModule
    ],
    declarations: [
      OrganizationChartDemoComponent
    ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, VCardService],
})
export class OrganizationChartDemoModule {
}
