import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'spinnerdemo.component.html',
})
export class SpinnerDemoComponent {
    msgs: Message[] = [];

    activeIndex: number = 0;

    value: number;



    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
