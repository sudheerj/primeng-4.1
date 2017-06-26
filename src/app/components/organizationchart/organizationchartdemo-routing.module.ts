import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OrganizationChartDemoComponent} from './organizationchartdemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: OrganizationChartDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class OrganizationChartDemoRoutingModule {
}
