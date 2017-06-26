import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {InputTextareaDemoComponent} from './textareademo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: InputTextareaDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class InputTextareaDemoRoutingModule {
}
