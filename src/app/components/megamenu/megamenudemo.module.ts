import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {MegaMenuModule} from 'primeng/components/megamenu/megamenu';
import {GrowlModule} from 'primeng/components/growl/growl';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {MegaMenuDemoRoutingModule} from './megamenudemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {MegaMenuDemoComponent} from './megamenudemo.component';


@NgModule({
  imports: [
    MegaMenuModule,
    MegaMenuDemoRoutingModule,
    InputTextModule,
    ButtonModule,
    WizardModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    MegaMenuDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class MegaMenuDemoModule {
}
