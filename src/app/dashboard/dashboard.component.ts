import { Component, OnInit } from '@angular/core';
import { NgxEchartsModule, provideEcharts, NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import { EChartsOption } from 'echarts';
import { Chart, registerables } from 'chart.js';
import { AssetDataService } from '../../assetData.service';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private sharedService: AssetDataService) {}

 chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  assetAllocationOptions: EChartsOption = {
    title: {
      text: 'Asset Allocation',
      left: 'center',
    },
    tooltip: {
      trigger: 'item', // Use the allowed literal type value
    },
    series: [
      {
        name: 'Allocation',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 10, name: 'Logistics' },
          { value: 30, name: 'Infrastructure' },
          { value: 10, name: 'Pharma' },
          { value: 30, name: 'Banking' },
          { value: 10, name: 'Insurance' },
          { value: 10, name: 'Real Estate' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };


  ngOnInit() {
    this.sharedService.assetData$.subscribe((data) => {
      this.assetAllocationOptions = { ...this.assetAllocationOptions,


      };
    });
  }
}

