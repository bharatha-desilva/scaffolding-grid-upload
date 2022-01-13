import { NgModule } from '@angular/core';
import { HomeScreenComponent } from './home-screen.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@bds/grid-upload';
import { AuthorizeGuard } from '@bds/auth';

const routes: Routes = [
    {
        path: 'home',
        //canActivate: [AuthorizeGuard],  TODO
        component: HomeScreenComponent,
    },
];

@NgModule({
    declarations: [HomeScreenComponent],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class HomeScreenModule {}
