import { AbstractControl } from "@angular/forms";

export class MatchPasswordValidator{

  static matchPassword(abstactControl: AbstractControl){
    let senha = abstactControl.get('senha')?.value;
    let senhaConfirmacao = abstactControl.get('senhaConfirmacao')?.value;

    if (senhaConfirmacao.length > 0 && senhaConfirmacao != senha){
      abstactControl.get('senhaConfirmacao')?.setErrors({
        matchPassword: true
      })
    }

    return null;
  }
}
