import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  query = '';
  loading = false;
  title = 'NGX-Libraries demo';
  tableRows = [];

  ngOnInit() {
    this.loadRows();
  }

  loadRows() {
    this.loading = true;
    this.tableRows = [];
    setTimeout(() => {
      this.loading = false;
      this.tableRows = [
        { id: 11, col1: 'testcol1', col2: 'testcol2', col3: '', col4: '', relation1: [] },
        { id: 12, col1: 'testcol1', col2: 'testcol2', col3: '', col4: '', relation1: [] },
        { id: 13, col1: 'testcol1', col2: 'testcol2', col3: '', col4: '', relation1: [] }
      ];
    }, 600);
  }

  onSearch($event: any) {
    const query = $event.target.value;
    if (query.length > 2) {
      this.query = query;
      console.log('search:', query);
      this.loadRows();
    }

    // reset results when search term removed
    if (query.length === 0) {
      this.loadRows();
    }
  }
}
