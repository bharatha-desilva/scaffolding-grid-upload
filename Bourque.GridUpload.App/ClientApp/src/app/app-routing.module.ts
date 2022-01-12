import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DevExtremeDemoComponent} from "./grid-demo/dev-extreme-demo.component";
import {RouterModule, Routes} from "@angular/router";
import {GridDataUploadComponent} from "./grid-upload/grid-data-upload.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'grid-upload/dev-extreme', component: DevExtremeDemoComponent },
    { path: 'grid-upload/upload', component: GridDataUploadComponent },
  {
    path: 'error',
    loadChildren: () => import('./screens/error/error.module').then((m) => m.ErrorModule),
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
