import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AccordionDemoComponent} from './accordiondemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: AccordionDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AccordionDemoRoutingModule {
}
