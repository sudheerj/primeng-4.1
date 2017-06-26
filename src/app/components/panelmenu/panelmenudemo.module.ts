import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {PanelMenuModule} from 'primeng/components/panelmenu/panelmenu';
import {GrowlModule} from 'primeng/components/growl/growl';
import {PanelMenuDemoRoutingModule} from './panelmenudemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {PanelMenuDemoComponent} from './panelmenudemo.component';


@NgModule({
  imports: [
    PanelMenuModule,
    PanelMenuDemoRoutingModule,
    WizardModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    PanelMenuDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class PanelMenuDemoModule {
}
