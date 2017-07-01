import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {GrowlModule} from 'primeng/components/growl/growl';
import {DataTableDemoRoutingModule} from './datatabledemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {DataTableDemoComponent} from './datatabledemo.component';


@NgModule({
  imports: [
    DataTableModule,
    DialogModule,
    DataTableDemoRoutingModule,
    WizardModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    DataTableDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class DataTableDemoModule {
}
