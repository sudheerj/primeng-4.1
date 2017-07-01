import {Component,OnInit} from '@angular/core';
import {NodeService} from '../../service/nodeservice';
import {Message, TreeNode} from 'primeng/components/common/api';

@Component({
  selector: 'section',
  templateUrl: 'treetabledemo.component.html',
})
export class TreeTableDemoComponent implements OnInit {
  msgs: Message[] = [];

  files: TreeNode[];


  activeIndex: number = 0;

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => this.files = files);
  }

  onRowDblclick(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.data.name});
  }

  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}
