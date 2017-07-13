import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'section',
  templateUrl: 'inputmaskdemo.component.html',
})
export class InputMaskDemoComponent {
  msgs: Message[] = [];

  activeIndex: number = 0;

  val1: string;

  onFocusinput(event) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'onFocus', summary: 'It will called on input focus'});
  }

  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}
