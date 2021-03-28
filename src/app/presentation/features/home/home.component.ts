import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILink } from 'src/app/core/models/links.model';
import { IProfile } from 'src/app/core/models/user.model';
import { HomeFacade } from 'src/app/facades/home.facade';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loadingProfile$: Observable<boolean>;
  profile$: Observable<IProfile>;
  links$: Observable<ILink[]>;
  loadingLinks$: Observable<boolean>;
  constructor(private _homeFacade: HomeFacade) {}

  ngOnInit(): void {
    this._initData();
    this._getData();
  }

  private _getData() {
    this._homeFacade.getProfile();
    this._homeFacade.getLinks();
  }

  private _initData() {
    this.loadingProfile$ = this._homeFacade.isLoadingProfile$;
    this.profile$ = this._homeFacade.profile$;
    this.loadingLinks$ = this._homeFacade.isLoadingLinks$;
    this.links$ = this._homeFacade.links$;
  }
}
