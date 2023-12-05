import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  forgotLink: string = '/auth/forgot';
  loginLink: string = '/auth/login';
}
