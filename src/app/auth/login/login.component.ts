import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  registerLink: string = '/auth/register';
  forgotLink: string = '/auth/forgot';
}
