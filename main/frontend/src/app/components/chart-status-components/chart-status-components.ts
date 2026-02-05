import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartType, registerables } from 'chart.js';
import { ApiCall } from '../../services/api-call';

Chart.register(...registerables)
@Component({
  selector: 'app-chart-status-components',
  standalone: true,
  imports: [BaseChartDirective,CommonModule],
  templateUrl: './chart-status-components.html',
  styleUrl: './chart-status-components.css',
})
export class ChartStatusComponents implements OnInit{
  public barChartType:ChartType = 'bar';
  public barChartData: any[] = [];
  public barChartLabels = ['Open', 'In progress', 'Resolved', 'Closed'];
  public barChartOptions = { aspectRatio: 1 };
  constructor(private apiCall: ApiCall) {}
  
  ngOnInit(){
    
    this.apiCall.getStatusCount().subscribe(
   (response: any) => {
     console.log('API Response:', response);  

        // Safely extract data (adjust keys if response uses different casing)
        const open = response.OPEN || response.open || 0;
        const in_Progress = response.IN_PROGRESS || response['in_progress'] || 0;
        const resolved = response.RESOLVED || response.resolved || 0;
        const closed = response.CLOSED || response.closed || 0;
        this.barChartData = [{
          label: 'Tickets by status',
          data: [open, in_Progress, resolved, closed],
          backgroundColor: ['rgba(14, 141, 25, 0.87)', 'rgb(74, 92, 190)', 'rgb(134, 36, 158)', 'rgba(255, 252, 104, 0.88)']
        }];
      },

      
    (error) => {
      
      console.error('API error:', error);
    }
  );
  }
}
