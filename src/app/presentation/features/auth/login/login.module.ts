import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from 'src/app/presentation/layout/layout.module';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];
@NgModule({
  declarations: [LoginComponent, FormComponent],
  imports: [RouterModule.forChild(routes), CommonModule, LayoutModule],
})
export class LoginModule {}
