import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'textareademo.component.html',
})
export class InputTextareaDemoComponent {
    msgs: Message[] = [];

    activeIndex: number = 0;

    onResize(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The textarea is resized ' + event});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
