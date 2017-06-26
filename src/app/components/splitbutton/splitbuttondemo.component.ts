import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MenuItem} from 'primeng/components/common/api';

@Component({
  selector: 'section',
  templateUrl: 'splitbuttondemo.component.html',
})
export class SplitButtonDemoComponent {
  msgs: Message[] = [];
  activeIndex: number = 0;

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Update', icon: 'fa-refresh', command: () => {
        this.update();
      }
      },
      {
        label: 'Delete', icon: 'fa-close', command: () => {
        this.delete();
      }
      },
      {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
      {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
    ];
  }

  save() {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Success', detail: 'Data Saved'});
  }

  update() {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Success', detail: 'Data Updated'});
  }

  delete() {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Success', detail: 'Data Deleted'});
  }

  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}


