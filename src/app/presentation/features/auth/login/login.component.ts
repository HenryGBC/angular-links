import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITokenResponse } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/data/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _service: AuthService) {}

  ngOnInit(): void {}
}
