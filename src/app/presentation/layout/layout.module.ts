import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BaseComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutModule {}
