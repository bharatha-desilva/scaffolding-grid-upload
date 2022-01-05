import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridDataUploadComponent } from './grid-data-upload.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [GridDataUploadComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [GridDataUploadComponent],
})
export class GridDataUploadModule {}
