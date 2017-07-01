import {Component, OnInit} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'section',
  templateUrl: 'gmapdemo.component.html',
})
export class GmapDemoComponent implements OnInit {
  msgs: Message[] = [];
  options: any;

  activeIndex: number = 0;

  ngOnInit() {
    this.options = {
      center: {lat: 14.442599, lng: 79.986458},
      zoom: 12
    };

  }

  handleZoomChanged(event) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: 'The map zoom options are changed'});
  }

  handleDragEnd(event) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: 'The map drag is reached end'});
  }

  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}
