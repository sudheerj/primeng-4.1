import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PickListDemoComponent} from './picklistdemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: PickListDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PickListDemoRoutingModule {
}
