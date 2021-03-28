import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ILoginData } from 'src/app/core/models/auth.model';
import { AuthFacade } from 'src/app/facades/auth.facade';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  loginForm: FormGroup;
  loadingLogin$: Observable<boolean>;
  loginError$: Observable<string>;
  constructor(private _fb: FormBuilder, private _authFacade: AuthFacade) {}

  ngOnInit(): void {
    this._initSelectors();
    this._initForm();
  }

  submitForm() {
    if (this.loginForm.invalid) {
      // TODO Call error Action
      const errorMsg = 'Completa todos los campos';
      this._authFacade.setErrorLogin(errorMsg);
      return;
    }

    const data: ILoginData = { ...this.loginForm.value };

    this._authFacade.login(data);

    // TODO Call Action para LoginAction
  }

  private _initSelectors() {
    this.loadingLogin$ = this._authFacade.isLoadinLogin$;
    this.loginError$ = this._authFacade.loginError$;
  }
  private _initForm() {
    this.loginForm = this._fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
}
