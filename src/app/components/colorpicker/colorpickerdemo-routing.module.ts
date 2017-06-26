import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ColorPickerDemoComponent} from './colorpickerdemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: ColorPickerDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ColorPickerDemoRoutingModule {
}
