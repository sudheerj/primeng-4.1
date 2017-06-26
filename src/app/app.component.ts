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
          {label: 'TextArea', icon: 'fa-refresh', routerLink: ['/textarea']}
        ]
      },
      {
        label: 'Defect fixes',
        items: [
          {label: 'ShowList', icon: 'fa-refresh', url: "https://github.com/primefaces/primeng/releases/tag/4.1.0-rc.1"}
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
