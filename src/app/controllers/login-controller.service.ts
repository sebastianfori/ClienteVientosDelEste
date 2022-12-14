import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from '../api/authentication.service';
import { Link } from '../links';
import { TokenPayload } from '../types/token-payload.type';

@Injectable({
  providedIn: 'root'
})
export class LoginControllerService {
  private isAuthenticatedSource = new BehaviorSubject<boolean>(false);
  private routesSource = new BehaviorSubject<Link[]>([]);
  public isAuthenticated$: Observable<boolean>;
  public routes$: Observable<Link[]>;

  constructor(private loginService: AuthenticationService) { 
    this.isAuthenticated$ = this.isAuthenticatedSource.asObservable();
    this.routes$ = this.routesSource.asObservable();
    if (this.token) {
      this.isAuthenticatedSource.next(true);
      this.routesSource.next(this.routes);
    }
  }

  public async login(username: string, password: string): Promise<boolean> {
    let payload = await this.loginService.login(username, password);
    console.log(payload);
    if (payload.data) {
      localStorage.setItem('token', payload.token);
      this.isAuthenticatedSource.next(true);
      this.routesSource.next(this.routes);
      return true;
    }
    return false;
  }

  public get token(): string | null {
    return localStorage.getItem('token');
  }

  public set token(value: string | null) {
    if (value) {
      localStorage.setItem('token', value);
    } else {
      localStorage.removeItem('token');
    }
  }

  public async logout(): Promise<void> {
    this.token = null;
    this.isAuthenticatedSource.next(false);
    this.routesSource.next(this.routes);
  }

  public get routes(): Link[] {
    if (this.token) {
      try
      {
        const decoded = jwt_decode(this.token);
        return (decoded as TokenPayload).routes;
      }
      catch (err) {
        console.error(err);
      }
    }
    return [new Link('Login', '/login')];
  }
}
