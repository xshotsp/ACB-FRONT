
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesUtilitarias {

  obtenerControl(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl;
  }


}
