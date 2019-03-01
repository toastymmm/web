import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = false;

  constructor(private router: Router) { }

  public async login(username: string, password: string) {
    this.isAuthenticated = true;

    this.router.navigate(['']);
  }

  public async logout() {
    this.isAuthenticated = false;
  }
}
