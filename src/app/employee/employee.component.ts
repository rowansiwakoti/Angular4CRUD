import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private http: Http, private router: Router) {
  }


  addEmployee = function (employee) {
    this.http.post('http://localhost:8888/employees/', employee).subscribe((res: Response) => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

}
