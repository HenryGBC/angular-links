import { Component, OnInit } from '@angular/core';
import { AuthFacade } from 'src/app/facades/auth.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private _authFacade: AuthFacade) {}

  ngOnInit(): void {}

  logout() {
    this._authFacade.logout();
  }
}
