import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {BackendTemplate, TemplateDef} from "../data/template-definition";
import {HttpClient} from "@angular/common/http";
import {GridUploadOptions} from "../models/grid-upload-options";

@Component({
  selector: 'app-dev-extreme-demo',
  templateUrl: './dev-extreme-demo.component.html',
  styleUrls: ['./dev-extreme-demo.component.css']
})
export class DevExtremeDemoComponent implements OnInit {

  dataSource: any[];
  template: Observable<TemplateDef>;
  states: any[];

  templateJson!: string;
  dateJson!: string;
  backendTemplates$!: Observable<BackendTemplate[]>;
  selectedBackendTemplateId!: number;
  dataSetFileContent: string = '';

  hasErrors: boolean = false;
  selectedError!: string;

  events: Array<string> = [];
  constructor(private readonly http: HttpClient, private readonly config: GridUploadOptions) {
    this.states = [];
    var temp = new TemplateDef();
    temp.keyField = 'ID';
    temp.columns = [{ property: 'Dummy', caption: 'Dummy' }];
    this.template = of(temp);
    this.dataSource = [];
  }

  ngOnInit(): void {
    this.backendTemplates$ = this.http.get<BackendTemplate[]>(
      `${this.config.gridUploadApiUri}/template`,
    );
  }

  loadData() {
    this.template = this.http.get<TemplateDef>(
      `${this.config.gridUploadApiUri}/template/${this.selectedBackendTemplateId}/dev-extreme-json`,
    );
    //this.template = JSON.parse(this.templateJson);
    this.dataSource = JSON.parse(this.dataSetFileContent);
    //console.log(this.template);
  }

  logEvent(eventName: any) {
    this.events.unshift(eventName);
  }

  allowUpdating(event: any) {
    console.log(event);
    var data = event.row.data;
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
    var data = event.data;
    this.hasErrors = data && data._control_data && data._control_data.hasErrors;
    this.selectedError = data?._control_data?.errors;
  }

  public onChange(event: any): void {
    var fileList: FileList = event.target.files;
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function (x) {
      self.dataSetFileContent = fileReader.result as string;
    };
    fileReader.readAsText(file);
  }
}
