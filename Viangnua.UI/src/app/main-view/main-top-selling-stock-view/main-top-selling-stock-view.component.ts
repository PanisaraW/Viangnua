import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxEchartsDirective} from "ngx-echarts";
import * as echarts from 'echarts';
import {fontsize} from "angular-material";

@Component({
  selector: 'app-main-top-selling-stock-view',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './main-top-selling-stock-view.component.html',
  styleUrl: './main-top-selling-stock-view.component.scss'
})
export class TopSellingStockViewComponent {
  chartOption: echarts.EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical', // Change orientation to vertical
      left: '5%', // Adjust left margin
      top: 'center', // Center vertically
      textStyle: {
        fontSize: 20, // Set the font size for the legend
      },
    },
    series: [
      {
        type: 'pie',
        name: 'Access From',
        radius: ['40%', '70%'],
        center: ['60%', '50%'], // Adjust center to move the chart to the left
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center',
          fontSize: 20,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {value: 1048, name: 'Elephant Pants'},
          {value: 735, name: 'Cat Shirt'},
          {value: 580, name: 'Bunny Pants'},
          {value: 484, name: 'Scarf'},
          {value: 300, name: 'Belt'}
        ]
      }
    ]
  };
}
