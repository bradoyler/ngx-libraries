import { Component, Input } from '@angular/core';

@Component({
  selector: '[bs-table-body-row]', // tslint:disable-line:component-selector
  template: `
  <td class="pl-4">
    <div *ngIf="showMultiSelect" class="custom-control custom-checkbox">
      <input type="checkbox" [checked]="row.isSelected"
      (change)="onCheck(row)" class="custom-control-input" id="check_{{row.id}}">
      <label class="custom-control-label" for="check_{{row.id}}"></label>
    </div>
  </td>
  <th scope="row">
    <a href="#" title="{{row.id}}" (click)="detailsAction(row)">
      {{row.id | truncateString }}
    </a>
  </th>
  <td>{{row.col1 | truncateString }}</td>
  <td>{{row.col2 | truncateString }}</td>
  <td>{{row.col3 | truncateString }}</td>
  <td>{{row.col4}}</td>
  <td>{{row.relation1 | arrayFieldMapper:'productName' }}</td>
  <td>
    <button class="btn btn-icon-only btn-text-dark show-on-row-hover mr-1" title="Edit {{row.id}}"
    (click)="editAction(row)"><i class="material-icons">edit</i></button>
    <button class="btn btn-icon-only btn-text-dark show-on-row-hover" title="Delete {{row.id}}"
    (click)="deleteAction(row)"><i class="material-icons">delete</i></button>
  </td>
`
})

export class DataTableBodyRowComponent {
  @Input() row: any;
  @Input() showMultiSelect = true;
  isAllChecked: boolean;
  pageSize: number;

  onCheck(row: any) {
    console.log('select()', row);
  }

  detailsAction(row: any) {
    console.log('clicked details', row);
  }

  editAction(row: any) {
    console.log('clicked edit', row);
  }

  deleteAction(row: any) {
    console.log('clicked delete', row);
  }
}
