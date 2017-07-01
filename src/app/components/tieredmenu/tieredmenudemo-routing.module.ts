import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TieredMenuDemoComponent} from './tieredmenudemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: TieredMenuDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TieredMenuDemoRoutingModule {
}
