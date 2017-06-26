import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OrderListDemoComponent} from './orderlistdemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: OrderListDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class OrderListDemoRoutingModule {
}
