import {Component, OnInit} from '@angular/core';
import {Car} from '../../domain/car';
import {CarService} from '../../service/carservice';
import {Message} from 'primeng/components/common/api';

@Component({
  templateUrl: './orderlistdemo.component.html'
})
export class OrderListDemoComponent implements OnInit {

  msgs: Message[] = [];
  activeIndex = 0;

  cars: Car[];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }

  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}
