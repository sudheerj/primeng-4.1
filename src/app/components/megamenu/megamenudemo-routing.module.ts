import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MegaMenuDemoComponent} from './megamenudemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: MegaMenuDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class MegaMenuDemoRoutingModule {
}
