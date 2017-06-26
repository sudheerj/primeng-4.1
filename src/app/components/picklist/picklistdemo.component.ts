import {Component, OnInit} from '@angular/core';
import {Car} from '../../domain/car';
import {CarService} from '../../service/carservice';
import {Message} from 'primeng/components/common/api';

@Component({
  templateUrl: './picklistdemo.component.html'
})
export class PickListDemoComponent implements OnInit {

  msgs: Message[] = [];
  activeIndex = 0;

  sourceCars: Car[];

  targetCars: Car[];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.sourceCars = cars);
    this.targetCars = [];
  }

  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}
