import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaymentsComponent } from './payments';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PaymentsComponent }
    ])
  ],
})
export class PaymentsModule {}
