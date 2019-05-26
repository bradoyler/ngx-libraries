import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-ngx-bs-table',
  template: `
  <div class="table-wrapper table-responsive">
  <div class="table-head-background"></div>
  <table class="table user-table" >
    <caption class="pl-2">
        <bs-table-spinner [loading]="loading"></bs-table-spinner>
    </caption>
    <!--<thead bs-datatable-head
      [showSelectAll]="false"
      [sortOptions]="sortOptions">
    </thead> --
    <!-- <tbody bs-datatable-body
      [showMultiSelect]="false"
      [loading]="loading"
      [rows]="rows"></tbody> -->
  </table>
  <bs-table-pager></bs-table-pager>
</div>
  `,
  styles: []
})
export class NgxBsTableComponent implements OnInit {
  @Input() loading = false;
  @Input() query: string = null;
  showImportButton = true;
  usersCount = 0;
  isAllChecked = false;
  sortField = 'externalId';
  sortDirections = { externalId: 'asc', firstName: 'none', lastName: 'none' };
  sortOptions: string = null;
  @Input() rows = [];
  selectedProductId: number;
  externalIds: string[] = [];
  dropDowns = { assign: false, unassign: false };

  constructor() { }

  ngOnInit() {
  }

}
