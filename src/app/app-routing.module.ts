import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {UsersComponent} from './users/users.component';
import {IsLoggedInGuard} from './auth/is-logged-in.guard';
import {IsLoggedOutGuard} from './auth/is-logged-out.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsLoggedOutGuard]
  },
  {path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
