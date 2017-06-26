import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PickListDemoComponent} from './picklistdemo.component';
import {PickListDemoRoutingModule} from './picklistdemo-routing.module';
import {PickListModule} from 'primeng/components/picklist/picklist';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

@NgModule({
  imports: [CommonModule,
    PickListDemoRoutingModule,
    PickListModule,
    WizardModule
  ],
  declarations: [
    PickListDemoComponent
  ]
})
export class PickListDemoModule {
}
