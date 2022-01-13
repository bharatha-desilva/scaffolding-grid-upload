import { NgModule } from '@angular/core';
import { GridUploadComponent } from './grid-upload.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from '@bds/auth';
import { AccessGuard } from './acl/access.guard';
import { FetchDataComponent } from './containers/fetch-data/fetch-data.component';
import { Privilege } from './models/privilege';
import { GridDataUploadModule } from './containers/grid-data-upload/grid-data-upload.module';
import { GridDataUploadComponent } from './containers/grid-data-upload/grid-data-upload.component';

const routes: Routes = [
    {
        path: 'grid-upload',
        component: GridUploadComponent,
        //canActivate: [AuthorizeGuard],
        children: [
            {
                path: 'upload',
                //canActivate: [AccessGuard],
                data: { targetPrivilege: Privilege.TEMPLATE_UPLOAD },
                component: GridDataUploadComponent,
            },
            {
                path: 'fetch-data',
                //canActivate: [AccessGuard],
                data: { targetPrivilege: Privilege.TEMPLATE_UPLOAD },
                component: FetchDataComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [GridUploadComponent],
    imports: [RouterModule.forChild(routes), GridDataUploadModule],
    exports: [GridUploadComponent],
})
export class GridUploadModule {}
