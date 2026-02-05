import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ApiCall } from '../../services/api-call';

Chart.register(...registerables)

@Component({
  selector: 'app-chart-priority-components',
  standalone: true,
  imports: [BaseChartDirective,CommonModule],
  templateUrl: './chart-priority-components.html',
  styleUrl: './chart-priority-components.css',
})
export class ChartPriorityComponents implements OnInit {
  public barChartType:ChartType = 'pie';
  public barChartData: any[] = [];
  public barChartLabels = ['LOW', 'MEDIUM', 'HIGH'];
  public barChartOptions = { aspectRatio: 1 };
  constructor(private apiCall: ApiCall) {}

  ngOnInit(){
    
    this.apiCall.getPriorityCount().subscribe(
   (response: any) => {
     console.log('API Response:', response);  

        // Safely extract data (adjust keys if response uses different casing)
        const LOW = response.LOW || response.LOW || 0;
        const MEDIUM = response.MEDIUM || response['MEDIUM'] || 0;
        const HIGH = response.HIGH || response.HIGH || 0;
        this.barChartData = [{
          label: 'Tickets by Priority',
          data: [LOW, MEDIUM, HIGH],
          backgroundColor: ['rgba(255,99,132)', 'rgba(54,162,235)', 'rgba(255,206,86)']
        }];
      },

      
    (error) => {
      
      console.error('API error:', error);
    }
  );
  }
}
