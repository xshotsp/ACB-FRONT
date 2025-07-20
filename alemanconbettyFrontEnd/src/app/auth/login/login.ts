import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth';
import { HttpClientModule } from '@angular/common/http';
import { FuncionesUtilitarias } from 'src/app/utils/funcionesUtilitarias';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule,FloatLabelModule,ButtonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent extends FuncionesUtilitarias {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    super();
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: (res) => console.log('Login success', res),
        error: (err) => console.error('Login error', err)
      });
    }
  }
}
