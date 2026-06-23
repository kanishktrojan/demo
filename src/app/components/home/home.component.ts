import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'Book Tracker';
  currentDate: string = '';

  ngOnInit(): void {
    this.currentDate = new Date().toLocaleDateString();
  }
}
