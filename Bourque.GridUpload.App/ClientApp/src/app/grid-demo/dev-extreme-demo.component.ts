import { Component, OnInit } from '@angular/core';
import {DataType, TemplateDef} from "../data/template-definition";

@Component({
  selector: 'app-dev-extreme-demo',
  templateUrl: './dev-extreme-demo.component.html',
  styleUrls: ['./dev-extreme-demo.component.css']
})
export class DevExtremeDemoComponent implements OnInit {

  dataSource: any[];
  template!: TemplateDef;
  states: any[];

  templateJson!: string;
  dateJson!: string;

  hasErrors: boolean = false;
  selectedError!: string;

  events: Array<string> = [];
  constructor() {
    this.states = /*service.getStates()*/[];
    this.template = new TemplateDef();
    this.template.keyField = "ID";
    this.template.columns = [
      { property: "Prefix", caption: "Title" },
      { property: "FirstName" },
      { property: "LastName" },
      { property: "BirthDate", dataType: DataType.DATE },
      { property: "HireDate", dataType: DataType.DATE },
      { property: "Position" },
      { property: "StateID", caption: "State", dataLookup:
          {
            property: "ID",
            caption: "Name",
            data: this.states
          } },
    ];
    this.dataSource = /*service.getEmployees()*/[];
  }

  ngOnInit(): void {
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
    var data = event.row.data;
    if(data.Position !== "CEO" && data.FirstName !== 'Kevin')
    {
      return false;
    }
    return true;
  }

  onCellPrepared(event: any) {
    event.cellElement.style.color = event.data.Position !== "CEO" && event.data.FirstName !== 'Kevin'
      ? "green" : "red";
    event.cellElement.style.borderColor = event.data.Position === "CEO" ? "green" : "red";
    event.row.color = event.data.Position === "CEO" ? "green" : "red";
  }

  clearEvents() {
    this.events = [];
  }

  validationCallback(obj: Object): boolean {
    console.log("validationCallback");
    //return Promise.reject("Test error message: any error");
    return false;
  }

  onRowSelect(event: any) {
    var data = event.data;
    this.hasErrors = data && data._control_data && data._control_data.hasErrors;
    this.selectedError = data?._control_data?.errors;
  }
}
