import { Component, Input } from '@angular/core';

@Component({
    selector: '[bs-table-head]', // tslint:disable-line:component-selector
    template: `
  <tr>
    <th scope="col" class="pl-4">
      <div *ngIf="showSelectAll" class="custom-control custom-checkbox">
        <input type="checkbox" [checked]="isAllChecked" (change)="onCheckAll()" class="custom-control-input" id="selectAll">
        <label class="custom-control-label" for="selectAll"></label>
      </div>
    </th>
    <th scope="col" (click)="sortTable('id')">
      <a class="sort-by">Id</a>
    </th>
    <th scope="col" (click)="sortTable('col1')">
      <a class="sort-by">col1</a>
    </th>
    <th scope="col" (click)="sortTable('col2')">
      <a class="sort-by">col2</a>
    </th>
    <th scope="col" (click)="sortTable('col3')">
      <a class="sort-by">col3</a>
    </th>
    <th scope="col">col4</th>
    <th scope="col"></th>
    <th scope="col"></th>
  </tr>
`
})

export class DataTableHeadComponent {
  @Input() showSelectAll = true;
  loading = false;
  isAllChecked = false;
  sortDirections = { id: 'asc' };
  usersCount = 0;
  pageSize = 0;

  @Input() query: string;
  @Input() selectedProductId: number;
  @Input() sortOptions: string;

  sortTable(column: string) {
    this.loading = true;
    this.toggleSortDirections(column);
    console.log('sortColumn():', column, this.sortDirections);
  }

  toggleSortDirections(field: string) {
    if (this.sortDirections[field] === 'asc') {
      this.sortDirections[field] = 'desc';
    } else {
      this.sortDirections[field] = 'asc';
    }
    this.sortOptions = `SortExpression=${field}&SortDirection=${this.sortDirections[field]}`;
  }

  onCheckAll() {
    if (this.isAllChecked) {
      this.isAllChecked = false;
    } else {
      this.isAllChecked = true;
    }
    console.log('onCheckAll', this.isAllChecked);
  }
}
