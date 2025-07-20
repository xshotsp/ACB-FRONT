import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: RegisterComponent }
    ])
  ],
})
export class RegisterModule {}
