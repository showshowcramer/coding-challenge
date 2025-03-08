import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Coding Challenge';
  users: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(map((response: any) => response)).subscribe((data: any[]) => {
      this.users = data;
    });
  }
}
