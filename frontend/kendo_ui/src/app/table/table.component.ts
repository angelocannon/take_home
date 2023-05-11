import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Student {
  name: string;
  age: number;
  hobbies: string[];
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  public gridData: Student[] = [];
  public filterValue: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getJSONData().subscribe(data => {
      this.gridData = data.students;
    });
  }

  private getJSONData(): Observable<any> {
    return this.http.post<any>('https://localhost:7244/data', {}).pipe(map(response => response));
  }

  applyFilter() {
    if (this.filterValue) {
      this.gridData = this.gridData.filter(item => {
        return (
          item.name.toLowerCase().includes(this.filterValue.toLowerCase()) ||
          item.age.toString().includes(this.filterValue) ||
          item.hobbies.some(hobby =>
            hobby.toLowerCase().includes(this.filterValue.toLowerCase())
          )
        );
      });
    } else {
      this.getJSONData().subscribe(data => {
        this.gridData = data.students;
      });
    }
  }
}