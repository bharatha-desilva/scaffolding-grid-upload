import { NgModule } from '@angular/core';
import { GridUploadComponent } from './grid-upload.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from '@bds/auth';
import { AccessGuard } from './acl/access.guard';
import { CounterComponent } from './containers/counter/counter.component';
import { FetchDataComponent } from './containers/fetch-data/fetch-data.component';
import { Privilege } from './models/privilege';

const routes: Routes = [
    {
        path: 'grid-upload',
        component: GridUploadComponent,
        canActivate: [AuthorizeGuard],
        children: [
            {
                path: 'upload',
                canActivate: [AccessGuard],
                data: { breadcrumb: 'Report', targetPrivilege: Privilege.TEMPLATE_UPLOAD },
                component: CounterComponent,
            },
            {
                path: 'counter',
                canActivate: [AccessGuard],
                data: { breadcrumb: 'Report', targetPrivilege: Privilege.TEMPLATE_UPLOAD },
                component: CounterComponent,
            },
            {
                path: 'fetch-data',
                canActivate: [AccessGuard],
                data: { breadcrumb: 'Report', targetPrivilege: Privilege.TEMPLATE_UPLOAD },
                component: FetchDataComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [GridUploadComponent],
    imports: [RouterModule.forChild(routes)],
    exports: [GridUploadComponent],
})
export class GridUploadModule {}
