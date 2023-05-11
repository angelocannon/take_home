import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public gridData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post<any>('https://localhost:7244/data', {}).pipe(
      map(response => response.students)
    ).subscribe(students => {
      this.gridData = {
        data: students,
        total: students.length
      };
    });
  }
}