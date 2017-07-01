import {NgModule} from '@angular/core';
import {CommonModule, APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {MenubarModule} from 'primeng/components/menubar/menubar';
import {GrowlModule} from 'primeng/components/growl/growl';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {MenubarDemoRoutingModule} from './menubardemo-routing.module';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
import {MenubarDemoComponent} from './menubardemo.component';


@NgModule({
  imports: [
    MenubarModule,
    MenubarDemoRoutingModule,
    InputTextModule,
    ButtonModule,
    WizardModule,
    GrowlModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    MenubarDemoComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class MenubarDemoModule {
}
