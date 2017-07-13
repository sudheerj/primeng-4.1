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
      {path: 'accordion', loadChildren: './components/accordion/accordiondemo.module#AccordionDemoModule'},
      {path: 'calendar', loadChildren: './components/calendar/calendardemo.module#CalendarDemoModule'},
      {path: 'treetable', loadChildren: './components/treetable/treetabledemo.module#TreeTableDemoModule'},
      {path: 'growl', loadChildren: './components/growl/growldemo.module#GrowlDemoModule'},
      {path: 'gmap', loadChildren: './components/gmap/gmapdemo.module#GmapDemoModule'},
      {path: 'chips', loadChildren: './components/chips/chipsdemo.module#ChipsDemoModule'},
      {path: 'tieredmenu', loadChildren: './components/tieredmenu/tieredmenudemo.module#TieredMenuDemoModule'},
      {path: 'menubar', loadChildren: './components/menubar/menubardemo.module#MenubarDemoModule'},
      {path: 'megamenu', loadChildren: './components/megamenu/megamenudemo.module#MegaMenuDemoModule'},
      {path: 'spinner', loadChildren: './components/spinner/spinnerdemo.module#SpinnerDemoModule'},
      {path: 'datatable', loadChildren: './components/datatable/datatabledemo.module#DataTableDemoModule'},
      {path: 'inputmask', loadChildren: './components/inputmask/inputmaskdemo.module#InputMaskDemoModule'},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
