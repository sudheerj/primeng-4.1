import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PanelMenuDemoComponent} from './panelmenudemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: PanelMenuDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PanelMenuDemoRoutingModule {
}
