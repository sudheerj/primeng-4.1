import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'chipsdemo.component.html',
})
export class ChipsDemoComponent {
    msgs: Message[] = [];

    activeIndex: number = 0;

    values: string[];

    onChangeColor(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The new Color is selected ' + event.value});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
