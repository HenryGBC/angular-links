import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './presentation/features/auth/auth.component';
import { BaseComponent } from './presentation/layout/base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    // canActivate: [LoggedGuard]
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./presentation/features/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
    ],
  },
  {
    path: 'auth',
    // canActivate: [UnLoggedGuard]
    loadChildren: () =>
      import('./presentation/features/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
