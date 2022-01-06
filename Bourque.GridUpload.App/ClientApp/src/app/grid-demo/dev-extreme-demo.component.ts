import { Component } from '@angular/core';
import { TemplateDef } from '../data/template-definition';

@Component({
    selector: 'app-dev-extreme-demo',
    templateUrl: './dev-extreme-demo.component.html',
    styleUrls: ['./dev-extreme-demo.component.css'],
})
export class DevExtremeDemoComponent {
    dataSource: any[];
    template!: TemplateDef;
    states: any[];

    templateJson!: string;
    dateJson!: string;

    hasErrors = false;
    selectedError!: string;

    events: Array<string> = [];
    constructor() {
        this.states = [];
        this.template = new TemplateDef();
        this.template.keyField = 'ID';
        this.template.columns = [{ property: 'Dummy', caption: 'Dummy' }];
        this.dataSource = [];
    }

    loadData() {
        this.template = JSON.parse(this.templateJson);
        this.dataSource = JSON.parse(this.dateJson);
        console.log(this.template);
    }

    logEvent(eventName: any) {
        this.events.unshift(eventName);
    }

    allowUpdating(event: any) {
        console.log(event);
        const data = event.row.data;
        if (data.Position !== 'CEO' && data.FirstName !== 'Kevin') {
            return false;
        }
        return true;
    }

    onCellPrepared(event: any) {
        event.cellElement.style.color =
            event.data.Position !== 'CEO' && event.data.FirstName !== 'Kevin' ? 'green' : 'red';
        event.cellElement.style.borderColor = event.data.Position === 'CEO' ? 'green' : 'red';
        event.row.color = event.data.Position === 'CEO' ? 'green' : 'red';
    }

    clearEvents() {
        this.events = [];
    }

    validationCallback(obj: Object): boolean {
        console.log('validationCallback');
        //return Promise.reject("Test error message: any error");
        return false;
    }

    onRowSelect(event: any) {
        const data = event.data;
        this.hasErrors = data && data._control_data && data._control_data.hasErrors;
        this.selectedError = data?._control_data?.errors;
    }
}
