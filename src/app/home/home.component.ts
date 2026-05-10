import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: [] // Using styleUrls (plural) with an empty array to avoid CSS errors
})
export class HomeComponent {
  // The Home page usually doesn't need a registration function.
  // If you want a button to go back to login, you can add it here.
}