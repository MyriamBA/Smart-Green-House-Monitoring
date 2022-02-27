import { Component } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
selector: 'app-ngbd-pagination',
templateUrl: './pagination.component.html'
})
export class NgbdpaginationBasicComponent {
page = 4;
page2 = 1;
currentPage = 3;
disablepage = 3;
pagecustom = 4;

getPageSymbol(current: number) {
return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
}
}
