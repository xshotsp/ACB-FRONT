import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/services/auth/auth';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payments.html',
  styleUrls: ['./payments.scss']
})
export class PaymentsComponent {

  constructor(private authService: AuthService, private http: HttpClient) {}

  createPayment() {
    this.http.post('http://localhost:8000/payments/create', { amount: 10 })
      .subscribe({
        next: (res) => console.log('Payment created', res),
        error: (err) => console.error('Payment error', err)
      });
  }
}
