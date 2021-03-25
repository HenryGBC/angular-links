import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [BaseComponent, CardComponent, LogoComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent, LogoComponent],
})
export class LayoutModule {}
