import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FileuploadDemoComponent} from './fileuploaddemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: FileuploadDemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class FileuploadDemoRoutingModule {
}
