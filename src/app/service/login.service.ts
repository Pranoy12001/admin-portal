import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  sendCredential(username: string, password: string) {
    let url = 'http://localhost:8888/token';
    let encodedCredentials = btoa(username + ':' + password);
    let basicHeader = 'Basic ' + encodedCredentials;
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: basicHeader,
    });

    return this.httpClient.get(url, {
      headers: headers,
    });
  }
}
