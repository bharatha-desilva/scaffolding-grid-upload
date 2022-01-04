import { NgModule } from '@angular/core';
import { GridUploadComponent } from './grid-upload.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from '@bds/auth';

const routes: Routes = [
    {
        path: 'grid-upload',
        component: GridUploadComponent,
        canActivate: [AuthorizeGuard],
        // children: [
        //     {
        //         path: 'workspace-management',
        //         component: WorkspaceManagementComponent,
        //         canActivate: [AccessGuard],
        //         data: { targetPrivilege: Privilege.WORKSPACE_LIST },
        //         children: [
        //             {
        //                 path: 'list',
        //                 component: WorkspaceListComponent,
        //             },
        //             {
        //                 path: 'change',
        //                 component: WorkspaceSelectorComponent,
        //                 canActivate: [AccessGuard],
        //                 data: { targetPrivilege: Privilege.WORKSPACE_CHANGE },
        //             },
        //             {
        //                 path: 'create',
        //                 component: WorkspaceComponent,
        //                 canActivate: [AccessGuard],
        //                 data: { targetPrivilege: Privilege.WORKSPACE_CREATE },
        //             },
        //             {
        //                 path: 'edit/:id',
        //                 component: WorkspaceComponent,
        //                 data: { targetPrivilege: Privilege.WORKSPACE_EDIT },
        //             },
        //             {
        //                 path: '**',
        //                 redirectTo: 'list',
        //             },
        //         ],
        //     },
        //     {
        //         path: 'report-management',
        //         component: ReportManagementComponent,
        //         canActivate: [AccessGuard],
        //         data: { targetPrivilege: Privilege.REPORT_LIST },
        //         children: [
        //             {
        //                 path: 'list',
        //                 component: ReportListComponent,
        //             },
        //             {
        //                 path: 'create',
        //                 component: ReportComponent,
        //                 canActivate: [AccessGuard],
        //                 data: { targetPrivilege: Privilege.REPORT_CREATE },
        //             },
        //             {
        //                 path: 'edit/:id',
        //                 component: ReportComponent,
        //                 canActivate: [AccessGuard],
        //                 data: { targetPrivilege: Privilege.REPORT_EDIT },
        //             },
        //             {
        //                 path: '**',
        //                 redirectTo: 'list',
        //             },
        //         ],
        //     },
        //     {
        //         path: 'access-control',
        //         component: ReportAccessControlComponent,
        //         canActivate: [AccessGuard],
        //         data: { targetPrivilege: Privilege.ACCESS_CONTROL_GROUP_ASSIGNMENT },
        //         children: [
        //             {
        //                 path: 'group-assignment',
        //                 component: UserGroupAssignmentComponent,
        //                 canActivate: [AccessGuard],
        //                 data: { targetPrivilege: Privilege.ACCESS_CONTROL_GROUP_ASSIGNMENT },
        //             },
        //             {
        //                 path: 'access-configuration',
        //                 component: ReportAccessConfigurationComponent,
        //                 canActivate: [AccessGuard],
        //                 data: { targetPrivilege: Privilege.ACCESS_CONTROL_CONFIGURATION },
        //             },
        //         ],
        //     },
        //     {
        //         path: 'reports/:reportId',
        //         canActivate: [AccessGuard],
        //         data: { breadcrumb: 'Report', targetPrivilege: Privilege.REPORT_NAVIGATION },
        //         component: ReportDisplayComponent,
        //     },
        // ],
    },
];

@NgModule({
    declarations: [GridUploadComponent],
    imports: [RouterModule.forChild(routes)],
    exports: [GridUploadComponent],
})
export class GridUploadModule {}
