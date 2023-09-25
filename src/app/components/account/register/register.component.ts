import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { MatchPasswordValidator } from 'src/app/validators/match-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formRegister = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(100)
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    senha: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    ]),

    senhaConfirmacao: new FormControl('', [
      Validators.required,
    ])
  },

    /* adicionando validacoes customizadas */
    {
      validators: [MatchPasswordValidator.matchPassword],
    }
  );

  get form(): any {
    return this.formRegister.controls;
  }

  onSubmit(): void {
    console.log(this.formRegister.value);
  }
}
