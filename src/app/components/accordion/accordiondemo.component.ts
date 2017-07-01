import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'section',
    templateUrl: 'accordiondemo.component.html',
})
export class AccordionDemoComponent {
    msgs: Message[] = [];

    activeIndex: number = 0;

    accordionActiveIndex: number[] = [0, 2];

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
