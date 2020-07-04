import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const token ='BQDmTIPh-GmLMQPS_YGxQ7O4-PM_OJcfIEI-N1Duly2ZVSzCAdKuSq9a3urcKKhEmFaxbk-L7rJzW0-O1QQ';
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
    .pipe(map((data) => data['albums'].items));
  }

  getArtista(termino: string) {
    return this.getQuery( `search?type=artist&limit=15&q=${termino}`)
    .pipe(map((data) => data['artists'].items));
  }
}
