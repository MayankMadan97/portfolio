import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getUserActivity(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `token ${environment.githubToken}`,
    });

    return this.http.get(`${this.apiUrl}/users/MayankMadan97/events`, { headers });
  }}
