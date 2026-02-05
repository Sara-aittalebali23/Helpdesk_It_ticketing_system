import { Component, OnInit } from '@angular/core';
import { ApiCall } from '../../../services/api-call';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets-list',
  imports: [CommonModule],
  templateUrl: './tickets-list.html',
  styleUrl: './tickets-list.css',
})
export class TicketsList implements OnInit {
  data: any;

  constructor(private apiCall: ApiCall) {}

  ngOnInit() {
    this.apiCall.getTickets().subscribe(
      (response) => {
        console.log('API response:', response);
        this.data=response;
      },
      (error) => {
        console.error('API error:', error);
        // Handle the error as needed
      }
    );

    this.apiCall.getStatusCount().subscribe(
      (response) => {
        console.log('Status count response:', response);
        // You can process the status count data here if needed
      },
      (error) => {
        console.error('Status count API error:', error);
        // Handle the error as needed
      }
    )

  }

}
