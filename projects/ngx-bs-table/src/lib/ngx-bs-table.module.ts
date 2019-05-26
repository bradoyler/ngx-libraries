import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBsTableComponent } from './ngx-bs-table.component';
import { DataTableBodyComponent, DataTableHeadComponent, DataTableBodyRowComponent, DataTablePagerComponent } from './components';
import { TruncateStringPipe } from './helpers/truncate-string.pipe';
import { ArrayFieldMapperPipe } from './helpers/array-field-mapper.pipe';
import { SpinnerComponent } from './components/spinner.component';

@NgModule({
  declarations: [
    NgxBsTableComponent,
    DataTableHeadComponent,
    DataTableBodyComponent,
    DataTableBodyRowComponent,
    DataTablePagerComponent,
    SpinnerComponent,
    TruncateStringPipe,
    ArrayFieldMapperPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [NgxBsTableComponent]
})
export class NgxBsTableModule { }
