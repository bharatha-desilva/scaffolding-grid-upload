import { Component, OnInit } from '@angular/core';
import {
  faCaretRight,
  faChartBar,
  faDatabase,
  faFileAlt,
  faFileUpload,
  faHome,
  faTimesCircle,
} from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.css']
})
export class SidebarContentComponent implements OnInit {

  iconHome = faHome;
  iconCaretRight = faCaretRight;
  iconChart = faChartBar;
  iconCircleX = faTimesCircle;
  iconDatabase = faDatabase;
  iconfile = faFileAlt;
  iconfileUpload = faFileUpload;

  constructor() { }

  ngOnInit(): void {
  }

}
