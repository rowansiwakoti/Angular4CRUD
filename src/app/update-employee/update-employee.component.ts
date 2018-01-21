import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  data: object = {};
  employees = [];
  exist: boolean = false;
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private router: Router, private route: ActivatedRoute, private http: Http) {
  }

  updateEmployee = function (employee) {
    this.http.put('http://localhost:8888/employees/' + this.id, employee, this.headers)
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.http.get('http://localhost:8888/employees').subscribe(
      (res: Response) => {
        this.employees = res.json();

        for (let i = 0; i < this.employees.length; i++) {
          if (+this.employees[i].id === +this.id) {
            this.exist = true;
            this.data = this.employees[i];
            break;
          }
        }
      }
    );
  }
}
