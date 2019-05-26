import { Component, Input } from '@angular/core';

@Component({
    selector: '[bs-table-body]', // tslint:disable-line:component-selector
    template: `
    <tr *ngIf="!rows.length && !loading">
      <td colspan="7">
        <p class="text-center display-4 mt-4 text-black-50">{{noResultsMessage}}</p>
      </td>
    </tr>
    <!-- bs-table-body-row -->
    <tr bs-table-body-row [ngClass]="hoverRow === i ? 'data-row-hover' : ''"
      (mouseover)="toggleClass(i)" (mouseout)="toggleClass('')"
      [showMultiSelect]="showMultiSelect" *ngFor="let row of rows; index as i;" [row]="row"></tr>
`
})

export class DataTableBodyComponent {
  @Input() showMultiSelect = true;
  @Input() loading: boolean;
  @Input() rows = [];
  @Input() query: string = null;
  noResultsMessage = 'no results...';
  hoverRow = '';

  toggleClass(id: string) {
    this.hoverRow = id;
  }
}
