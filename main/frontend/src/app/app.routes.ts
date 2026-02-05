import { Routes } from '@angular/router';
import { TicketsList } from './components/pages/tickets-list/tickets-list';
import { MainComponent } from './components/main-component/main-component';
import { UsersList } from './components/pages/users-list/users-list';
import { RepportsComponents } from './components/pages/repports-components/repports-components';
import { ChartStatusComponents } from './components/chart-status-components/chart-status-components';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"admin",
        pathMatch:"full"
        
    },
    {
        path:"admin",
        component:MainComponent
    },
    {
        path:"tickets",
        component:TicketsList
    },
    {
        path:"agents",
        component:UsersList
    },
    {
        path:"repports",
        component:RepportsComponents
    },
    {
        path:"test-chart",
        component:ChartStatusComponents
    }

];
