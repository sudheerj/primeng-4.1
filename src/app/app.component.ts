import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items: MenuItem[];

  ngOnInit() {
    this.items = [{
      label: 'New components',
      items: [
        {label: 'ColorPicker', icon: 'fa-refresh', routerLink: ['/colorpicker']},
        {label: 'OrganizationChart', icon: 'fa-refresh', routerLink: ['/organizationchart']},
      ]
    },
      {
        label: 'New features',
        items: [
          {label: 'PickList', icon: 'fa-refresh', routerLink: ['/picklist']},
          {label: 'OrderList', icon: 'fa-refresh', routerLink: ['/orderlist']},
          {label: 'AutoComplete', icon: 'fa-refresh', routerLink: ['/autocomplete']},
          {label: 'Dropdown', icon: 'fa-refresh', routerLink: ['/dropdown']},
          {label: 'SplitButton', icon: 'fa-refresh', routerLink: ['/splitbutton']},
          {label: 'PanelMenu', icon: 'fa-refresh', routerLink: ['/panelmenu']},
          {label: 'Tooltip', icon: 'fa-refresh', routerLink: ['/tooltip']},
          {label: 'Panel', icon: 'fa-refresh', routerLink: ['/panel']},
          {label: 'Fileupload', icon: 'fa-refresh', routerLink: ['/fileupload']},
          {label: 'TextArea', icon: 'fa-refresh', routerLink: ['/textarea']},
          {label: 'Accordion', icon: 'fa-refresh', routerLink: ['/accordion']},
          {label: 'Calendar', icon: 'fa-refresh', routerLink: ['/calendar']},
          {label: 'TreeTable', icon: 'fa-refresh', routerLink: ['/treetable']},
          {label: 'Growl', icon: 'fa-refresh', routerLink: ['/growl']},
          {label: 'Gmap', icon: 'fa-refresh', routerLink: ['/gmap']},
          {label: 'Chips', icon: 'fa-refresh', routerLink: ['/chips']},
          {label: 'TieredMenu', icon: 'fa-refresh', routerLink: ['/tieredmenu']},
          {label: 'MenuBar', icon: 'fa-refresh', routerLink: ['/menubar']},
          {label: 'MegaMenu', icon: 'fa-refresh', routerLink: ['/megamenu']},
          {label: 'Spinner', icon: 'fa-refresh', routerLink: ['/spinner']},
          {label: 'DataTable', icon: 'fa-refresh', routerLink: ['/datatable']}
        ]
      },
      {
        label: 'Defect fixes',
        items: [
          {label: 'RC1', icon: 'fa-refresh', url: "https://github.com/primefaces/primeng/releases/tag/4.1.0-rc.1"},
          {label: 'RC3', icon: 'fa-refresh', url: "https://www.primefaces.org/primeng-4-1-0-rc3-released/"}
        ]
      },
      {
        label: 'Miscellaneous',
        items: [
          {label: 'Performance Improvements', icon: 'fa-refresh', url:'https://www.primefaces.org/primeng-4-1-0-rc1-released/'},
          {label: 'Showcase Facelift', icon: 'fa-repeat', url:'https://www.primefaces.org/primeng/'}
        ]
      }];
  }
}
