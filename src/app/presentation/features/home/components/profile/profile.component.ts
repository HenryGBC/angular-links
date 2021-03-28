import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() profile: IProfile;
  @Input() isLoading: boolean;
  constructor() {}

  ngOnInit(): void {}
}
