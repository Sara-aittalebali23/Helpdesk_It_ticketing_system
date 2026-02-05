import { Component } from '@angular/core';
import { ChartStatusComponents } from '../chart-status-components/chart-status-components';
import { ChartPriorityComponents } from '../chart-priority-components/chart-priority-components';
import { ActiveTicketsComponents } from '../active-tickets-components/active-tickets-components';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [ChartStatusComponents ,ChartPriorityComponents , ActiveTicketsComponents],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent {

}
