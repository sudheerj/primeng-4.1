import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {GmapDemoComponent} from './gmapdemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: GmapDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class GmapDemoRoutingModule {
}
