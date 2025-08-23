import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';

export const routes: Routes = [
 {
    path: '',
    component: UserListComponent
  },
   {
        path: 'users/new', 
        loadComponent: () => import('./components/user-form/user-form.component').then(m => m.UserFormComponent)
    },
    {
        path: 'users/edit/:id', 
        loadComponent: () => import('./components/user-form/user-form.component').then(m => m.UserFormComponent)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
