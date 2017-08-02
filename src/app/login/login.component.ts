import {Component} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';


@Component({
  template: `
    <form [formGroup]="loginForm"
          (ngSubmit)="submit()">

      <input placeholder="username"
             formControlName="username">

      <span *ngIf="username.invalid">username invalid</span>

      <input type="password"
             placeholder="password.."
             formControlName="password">

      <div formArrayName="emails">
        <input *ngFor="let email of emails.controls; let i = index"
               [formControlName]="i">
      </div>
      <button (click)="addEmail()">+</button>


      <input type="checkbox"
             formControlName="rememberMe"
      >
      <button>submit</button>
    </form>
  `,
  styles  : ['input.ng-invalid {background-color: red}']
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor(fb: FormBuilder) {

    this.loginForm = fb.group({
      username  : [null, Validators.required],
      password  : null,
      emails    : fb.array([new FormControl()]),
      rememberMe: null
    });
  }

  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get emails(): FormArray {
    return this.loginForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(new FormControl());
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  submit() {
    if (this.username.valid) {
      console.log(this.loginForm.value);
    }
  }

}
