import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AutocompleteDemoComponent} from './autocompletedemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: AutocompleteDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AutocompleteDemoRoutingModule {
}
