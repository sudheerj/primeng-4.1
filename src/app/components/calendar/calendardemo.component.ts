import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'calendardemo.component.html',
})
export class CalendarDemoComponent {
    msgs: Message[] = [];

    activeIndex: number = 0;

    date1: Date;

    onClose($event) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'The calendar popup is closed'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
