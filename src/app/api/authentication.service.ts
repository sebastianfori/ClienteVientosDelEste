import { HttpClient } from '@angular/common/http';
import { Injectable, resolveForwardRef } from '@angular/core';
import { APIPayload } from '../types/api-payload.type';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loginUrl = environment.api.url + environment.api.endpoints.login;
  private logoutUrl = environment.api.url + environment.api.endpoints.logout;

  constructor(private http: HttpClient) { }

  public async login(username: string, password: string): Promise<APIPayload<boolean>> {
    let response: any = await firstValueFrom(this.http.post(this.loginUrl, { 'username': username, 'password': password }));
    if (response) {
      if (response.status) {
        throw new Error(response.statusText + ' (' + response.status + ')');
      }
      else {
        return new APIPayload(true, response.token);
      }
    }
    else {
      throw new Error('No response from server');
    }
  }

  /*public async logout(token: any): Promise<APIPayload<boolean>> {
    let response: any = await firstValueFrom(this.http.post(this.logoutUrl, {}));
    if (response) {
      if (response.status) {
        throw new Error(response.statusText + ' (' + response.status + ')');
      }
      else {
        return new APIPayload(true, response.token);
      }
    }
    else {
      throw new Error('No response from server');
    }
  }*/
}
