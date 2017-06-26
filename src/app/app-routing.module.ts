import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'colorpicker', loadChildren: './components/colorpicker/colorpickerdemo.module#ColorPickerDemoModule'},
      {path: 'organizationchart', loadChildren: './components/organizationchart/organizationchartdemo.module#OrganizationChartDemoModule'},
      {path: 'picklist', loadChildren: './components/picklist/picklistdemo.module#PickListDemoModule'},
      {path: 'orderlist', loadChildren: './components/orderlist/orderlistdemo.module#OrderListDemoModule'},
      {path: 'autocomplete', loadChildren: './components/autocomplete/autocompletedemo.module#AutocompleteDemoModule'},
      {path: 'dropdown', loadChildren: './components/dropdown/dropdowndemo.module#DropdownDemoModule'},
      {path: 'splitbutton', loadChildren: './components/splitbutton/splitbuttondemo.module#SplitButtonDemoModule'},
      {path: 'panel', loadChildren: './components/panel/paneldemo.module#PanelDemoModule'},
      {path: 'tooltip', loadChildren: './components/tooltip/tooltipdemo.module#TooltipDemoModule'},
      {path: 'panelmenu', loadChildren: './components/panelmenu/panelmenudemo.module#PanelMenuDemoModule'},
      {path: 'fileupload', loadChildren: './components/fileupload/fileuploaddemo.module#FileuploadDemoModule'},
      {path: 'textarea', loadChildren: './components/textarea/textareademo.module#InputTextareaDemoModule'},

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
