import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ILink } from 'src/app/core/models/links.model';
import { HomeFacade } from 'src/app/facades/home.facade';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss'],
})
export class AddLinkComponent implements OnInit {
  linkForm: FormGroup;
  loaderLink$: Observable<boolean>;
  constructor(private _fb: FormBuilder, private _homeFacade: HomeFacade) {}

  ngOnInit(): void {
    this.loaderLink$ = this._homeFacade.loaderAddLink$;
    this._initForm();
  }

  submitForm() {
    if (this.linkForm.invalid) {
      const errorMsg = 'Completa todos los campos';
      // this._authFacade.setErrorLogin(errorMsg);
      return;
    }
    const data: ILink = { ...this.linkForm.value };
    this._homeFacade.createLink(data);
    this.linkForm.reset();
    // this._authFacade.login(data);
  }
  private _initForm() {
    this.linkForm = this._fb.group({
      name: ['', Validators.compose([Validators.required])],
      url: ['', Validators.compose([Validators.required])],
    });
  }
}
