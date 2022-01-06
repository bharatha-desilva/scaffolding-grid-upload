import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevExtremeDemoComponent } from './grid-demo/dev-extreme-demo.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    { path: 'grid-upload/dev-extreme', component: DevExtremeDemoComponent },
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
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
