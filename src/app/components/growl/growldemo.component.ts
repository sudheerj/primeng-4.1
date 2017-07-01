import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'section',
  templateUrl: 'growldemo.component.html',
})
export class GrowlDemoComponent {
  msgs: Message[] = [];

  activeIndex: number = 0;

  clicks: number = 0;

  count() {
    this.clicks++;
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: 'count is'+ this.clicks});
  }

  onClick($event){
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: $event.message});
  }

  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}
