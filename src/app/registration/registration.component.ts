import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrls: []
})
export class RegistrationComponent {
  constructor(private router: Router) {}

  onRegister() {
    console.log('User registered');
    this.router.navigate(['/login']);
  }
}