import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TreeTableDemoComponent} from './treetabledemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: TreeTableDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TreeTableDemoRoutingModule {
}
