import { Component, Input, OnInit } from '@angular/core';
import { ILink } from 'src/app/core/models/links.model';

@Component({
  selector: 'app-item-link',
  templateUrl: './item-link.component.html',
  styleUrls: ['./item-link.component.scss'],
})
export class ItemLinkComponent implements OnInit {
  @Input() link: ILink;
  constructor() {}

  ngOnInit(): void {}
}
