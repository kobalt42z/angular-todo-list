import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ForOforComponent } from './for-ofor/for-ofor.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotComponent } from './auth/forgot/forgot.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'List/:name',
        component: ListComponent,
      },
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: '',
        redirectTo:"login",
        pathMatch:"full"
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgot',
        component: ForgotComponent,
      },
    ],
    
  },
  {
    path: '**',
    component: ForOforComponent,
  },
];
