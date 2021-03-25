import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddLinkComponent } from './components/add-link/add-link.component';
import { ItemLinkComponent } from './components/item-link/item-link.component';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    AddLinkComponent,
    ItemLinkComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, LayoutModule],
})
export class HomeModule {}
