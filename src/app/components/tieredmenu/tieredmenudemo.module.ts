import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {TieredMenuModule} from 'primeng/components/tieredmenu/tieredmenu';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlModule} from 'primeng/components/growl/growl';
import {TieredMenuDemoRoutingModule} from './tieredmenudemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {TieredMenuDemoComponent} from './tieredmenudemo.component';


@NgModule({
  imports: [
    TieredMenuModule,
    TieredMenuDemoRoutingModule,
    WizardModule,
    GrowlModule,
    ButtonModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    TieredMenuDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class TieredMenuDemoModule {
}
