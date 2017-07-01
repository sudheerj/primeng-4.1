import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SpinnerDemoComponent} from './spinnerdemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: SpinnerDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SpinnerDemoRoutingModule {
}
