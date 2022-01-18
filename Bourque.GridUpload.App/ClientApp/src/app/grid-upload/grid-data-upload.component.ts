import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import * as XLSX from 'xlsx';

type AOA = any[][];

@Component({
  selector: 'app-grid-data-upload',
  templateUrl: './grid-data-upload.component.html',
  styleUrls: ['./grid-data-upload.component.css']
})
export class GridDataUploadComponent implements OnInit {
  public files: NgxFileDropEntry[] = [];
  data: AOA = [];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName = 'SheetJS.xlsx';
  fileNameCSV = 'SheetJS.csv';

  ngOnInit(): void {
  }

  onFileChange(evt: any): void {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log('data:', this.data);
      this.data.map((res) => {
        if (res[0] === 'no') {
          console.log(res[0]);
        } else {
          console.log(res[0]);
        }
      });
    };
    reader.readAsBinaryString(target.files[0]);
  }

  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  exportCSV(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileNameCSV);
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

          const reader: FileReader = new FileReader();
          reader.onload = (e: any) => {
              /* read workbook */
              const bstr: string = e.target.result;
              const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

              /* grab first sheet */
              const wsname: string = wb.SheetNames[0];
              const ws: XLSX.WorkSheet = wb.Sheets[wsname];

              /* save data */
              this.data = <AOA>XLSX.utils.sheet_to_json(ws, { header: 1 });
              console.log('data:', this.data);
              this.data.map((res) => {
                if (res[0] === 'no') {
                  console.log(res[0]);
                } else {
                  console.log(res[0]);
                }
              });

          };
          reader.readAsBinaryString(file);

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any){
    console.log(event);
  }

  public fileLeave(event: any){
    console.log(event);
  }
}
