import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';
import { UsersComponent } from './users/users.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthService} from './auth/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IsLoggedInGuard} from './auth/is-logged-in.guard';
import {IsLoggedOutGuard} from './auth/is-logged-out.guard';
import {SharedModule} from './shared/shared.module';
import {UsersService} from './users/users.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    SharedModule,
    LayoutModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent
  ],
  providers: [
    AuthService,
    UsersService,
    IsLoggedInGuard,
    IsLoggedOutGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
