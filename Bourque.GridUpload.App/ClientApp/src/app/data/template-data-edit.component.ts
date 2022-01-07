import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemplateDef } from './template-definition';

@Component({
    selector: 'app-template-data-edit',
    templateUrl: './template-data-edit.component.html',
})
export class TemplateDataEditComponent implements OnInit {
    @Input()
    template!: TemplateDef | null;

    @Input()
    dataSource!: any[];

    @Output() onRowSelect: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    allowUpdating(event: any) {
        const data = event.row.data;
        return data._control_data?.completed ? false : true;
    }

    onCellPrepared(event: any) {
        const data = event.row?.data;
        if (data && data._control_data && data._control_data.completed) {
            event.cellElement.style.backgroundColor = 'lightgrey';
        }
        if (data && data._control_data && data._control_data.hasErrors) {
            event.cellElement.style.backgroundColor = '#ffc1bd';
            event.cellElement.style.color = '#ff1100';
        }
    }

    onRowClick(event: any) {
        this.onRowSelect.emit(event);
    }

    onSaved() {
        console.log('template: ', JSON.stringify(this.template, null, 4));
        console.log('date : ', JSON.stringify(this.dataSource, null, 4));
    }
}
