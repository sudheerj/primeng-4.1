import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {TreeTableModule} from 'primeng/components/treetable/treetable';
import {GrowlModule} from 'primeng/components/growl/growl';
import {TreeTableDemoRoutingModule} from './treetabledemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {TreeTableDemoComponent} from './treetabledemo.component';


@NgModule({
  imports: [
    TreeTableModule,
    TreeTableDemoRoutingModule,
    WizardModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    TreeTableDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class TreeTableDemoModule {
}
