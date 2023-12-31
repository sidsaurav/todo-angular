import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'To Do Angular <3';
  constructor(public router: Router) {}
  ngOnInit() {
    this.router.navigateByUrl('/home');
  }
}
