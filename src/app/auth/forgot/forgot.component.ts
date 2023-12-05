import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './forgot.component.html',
})
export class ForgotComponent {
  registerLink: string = '/auth/register';
  loginLink: string = '/auth/login';
}
