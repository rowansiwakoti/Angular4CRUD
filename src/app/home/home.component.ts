import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) {
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  employees = [];
  fetchData = function () {
    this.http.get('http://localhost:8888/employees').subscribe(
      (res: Response) => {
        this.employees = res.json();
      }
    );
  };

  deleteEmployee = function (id: number) {
    if (confirm('Are you sure, you want to delete?')) {
      return this.http.delete('http://localhost:8888/employees/' + id, {headers: this.headers}).toPromise().then(
        () => {
          this.fetchData();
        }
      );
    }
  };

  editEmployee = function (employee) {

  };

  ngOnInit() {
    this.fetchData();
  }

}
