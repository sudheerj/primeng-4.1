import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MenubarDemoComponent} from './menubardemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: MenubarDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class MenubarDemoRoutingModule {
}
