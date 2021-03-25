import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { FormComponent } from './components/form/form.component';
import { LayoutModule } from 'src/app/presentation/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
  },
];

@NgModule({
  declarations: [SignupComponent, FormComponent],
  imports: [RouterModule.forChild(routes), CommonModule, LayoutModule],
})
export class SignupModule {}
