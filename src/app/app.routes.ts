import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ForOforComponent } from './for-ofor/for-ofor.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

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
    path: '**',
    component: ForOforComponent,
  },
];
