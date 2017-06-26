import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {FileUploadModule} from 'primeng/components/fileupload/fileupload';
import {GrowlModule} from 'primeng/components/growl/growl';
import {FileuploadDemoRoutingModule} from './fileuploaddemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {FileuploadDemoComponent} from './fileuploaddemo.component';


@NgModule({
  imports: [
    FileUploadModule,
    FileuploadDemoRoutingModule,
    WizardModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    FileuploadDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class FileuploadDemoModule {
}
