import { Component, Input } from '@angular/core';

@Component({
    selector: 'bs-table-pager', // tslint:disable-line:component-selector
    template: `
  <div class="card-footer bg-white p-2 border-top">
    <nav aria-label="Page navigation">
      <ul class="pagination pagination-sm m-0 justify-content-center">
        <li class="page-item" [ngClass]="{'disabled': !pagerLinks.previous }">
          <a class="page-link " href="#" (click)="previousPage()">Previous</a>
        </li>
        <!-- <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li> -->
        <li class="page-item" [ngClass]="{'disabled': disabled || !pagerLinks.next }">
          <a class="page-link" href="#" (click)="nextPage()">Next</a>
        </li>
      </ul>
      <select *ngIf="rowCount > 50" style="max-width:80px;" class="custom-select"
      (change)="selectPageSize($event)">
        <option value="50">50</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
      </select>
      <span *ngIf="rowCount > 50"> of {{ rowCount }} rows </span>
      <span *ngIf="rowCount < 50"> {{ rowCount }} rows </span>
    </nav>
  </div>
`
})

export class DataTablePagerComponent {
    @Input() disabled: boolean;
    loading = false;
    pagerLinks = { next: null, previous: null };
    rowCount = 0;

    selectPageSize($event: any) {
      console.log('>>', $event.target.value, $event);
    }

    nextPage() {
      if (this.pagerLinks.next) {
        console.log('next:', this.pagerLinks);
      }
    }

    previousPage() {
      if (this.pagerLinks.previous) {
        console.log('previous:', this.pagerLinks);
      }
    }
}
