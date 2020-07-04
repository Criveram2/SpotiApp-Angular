import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  //metodo para consultar releases
  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA3UJGpfZnDzPpa0_gi1AJThDZhoRzWw0F99eq5betMko5CDsfONmaxwPrPjI9Htkqwrrcnr2rKbv4Y2KQ',
    });
    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', {headers});

  }
}
