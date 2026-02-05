import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { SidebarComponent } from './components/sidebar-component/sidebar-component';
import { MainComponent } from './components/main-component/main-component';

@Component({
  selector: 'app-root ',
  imports: [CommonModule,RouterOutlet,NavbarComponent,SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('helpdesk_IT_frontend');
}
