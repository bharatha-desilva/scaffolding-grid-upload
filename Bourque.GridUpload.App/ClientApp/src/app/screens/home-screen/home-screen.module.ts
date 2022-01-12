import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthorizeGuard} from "@bds/auth";
import {HomeScreenComponent} from "./home-screen.component";



const routes: Routes = [
  {
    path: 'home',
    // canActivate: [AuthorizeGuard], TODO
    component: HomeScreenComponent,
  },
];

@NgModule({
  declarations: [HomeScreenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeScreenModule { }
