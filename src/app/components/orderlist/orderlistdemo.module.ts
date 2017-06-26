import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderListDemoComponent} from './orderlistdemo.component';
import {OrderListDemoRoutingModule} from './orderlistdemo-routing.module';
import {OrderListModule} from 'primeng/components/orderlist/orderlist';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

@NgModule({
  imports: [CommonModule,
    OrderListDemoRoutingModule,
    OrderListModule,
    WizardModule
  ],
  declarations: [
    OrderListDemoComponent
  ]
})
export class OrderListDemoModule {
}
