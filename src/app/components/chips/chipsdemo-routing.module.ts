import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ChipsDemoComponent} from './chipsdemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: ChipsDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ChipsDemoRoutingModule {
}
