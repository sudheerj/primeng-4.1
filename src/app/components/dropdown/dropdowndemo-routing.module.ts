import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DropdownDemoComponent} from './dropdowndemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: DropdownDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DropdownDemoRoutingModule {
}
