import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';

const routes : Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'home', 
        component: HomeComponent
    },
    {
        path: 'directory',
        component: DirectoryComponent
    }
];

export const appRoutingModule = RouterModule.forRoot(routes);