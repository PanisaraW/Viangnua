import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {NgxEchartsDirective} from 'ngx-echarts';
import * as echarts from 'echarts/core';
import {EChartsOption} from "echarts";

class xAxis {
}

@Component({
  selector: 'app-orders-overall-orders-view',
  standalone: true,
  imports: [CommonModule, MatGridListModule, NgxEchartsDirective],
  templateUrl: './orders-overall-orders-view.component.html',
  styleUrls: ['./orders-overall-orders-view.component.scss'],
})
export class OrdersOverallOrdersViewComponent implements OnInit {
  chartOption: EChartsOption={
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };
  ngOnInit(): void {
  }
}

