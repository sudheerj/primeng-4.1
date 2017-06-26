import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MenuItem} from 'primeng/components/common/api';

@Component({
  selector: 'section',
  templateUrl: 'panelmenudemo.component.html',
})
export class PanelMenuDemoComponent {
  msgs: Message[] = [];

  activeIndex: number = 0;

  items: MenuItem[];

  itemsSeparator: MenuItem[];

  ngOnInit() {

    this.itemsSeparator = [
      {
        label: 'File',
        icon: 'fa-file-o',
        separator: true,
        items: [{
          label: 'New',
          icon: 'fa-plus',
          separator: true,
          items: [
            {label: 'Project', separator: true},
            {label: 'Other', separator: true},
          ]
        },
          {label: 'Open', separator: true},
          {label: 'Quit', separator: true}
        ]
      }];
    this.items = [
      {
        label: 'File',
        icon: 'fa-file-o',
        items: [{
          label: 'New',
          icon: 'fa-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          {label: 'Undo', icon: 'fa-mail-forward'},
          {label: 'Redo', icon: 'fa-mail-reply'}
        ]
      },
      {
        label: 'Help',
        icon: 'fa-question',
        items: [
          {
            label: 'Contents'
          },
          {
            label: 'Search',
            icon: 'fa-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File'
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'fa-gear',
        items: [
          {
            label: 'Edit',
            icon: 'fa-refresh',
            items: [
              {label: 'Save', icon: 'fa-save'},
              {label: 'Update', icon: 'fa-save'},
            ]
          },
          {
            label: 'Other',
            icon: 'fa-phone',
            items: [
              {label: 'Delete', icon: 'fa-minus'}
            ]
          }
        ]
      }
    ];
  }

  onChangeColor(event: any) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'The new Color is selected ' + event.value});
  }

  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}
