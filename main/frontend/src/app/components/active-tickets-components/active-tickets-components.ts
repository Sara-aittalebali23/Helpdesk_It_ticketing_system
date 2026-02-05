import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiCall } from '../../services/api-call';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-active-tickets-components',
  imports: [CommonModule],
  templateUrl: './active-tickets-components.html',
  styleUrl: './active-tickets-components.css',
})
export class ActiveTicketsComponents implements OnInit {
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
    }

}
