import { Component } from '@angular/core';
import {
    faCaretRight,
    faChartBar,
    faDatabase,
    faHome,
    faTimesCircle,
} from '@fortawesome/pro-solid-svg-icons';

@Component({
    selector: 'app-sidebar-content',
    templateUrl: './sidebar-content.component.html',
    styleUrls: ['./sidebar-content.component.scss'],
})
export class SidebarContentComponent {
    iconHome = faHome;
    iconCaretRight = faCaretRight;
    iconChart = faChartBar;
    iconCircleX = faTimesCircle;
    iconDatabase = faDatabase;
}
