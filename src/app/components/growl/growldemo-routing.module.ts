import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {GrowlDemoComponent} from './growldemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: GrowlDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class GrowlDemoRoutingModule {
}
