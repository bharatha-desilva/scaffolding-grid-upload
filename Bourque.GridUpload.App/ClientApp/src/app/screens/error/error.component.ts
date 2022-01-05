import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
})
export class ErrorComponent {
    errorCode: string;

    constructor(private readonly activatedRoute: ActivatedRoute) {
        this.errorCode = (this.activatedRoute.snapshot.params as { errorCode: string }).errorCode;
    }
}
