import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const token = 'BQCnsZWEWU_6OSP3p0XSLdU2xbaZVQGfi-WPLEGJlGNLjVgy-W83VS0082wtlXGeYgltVb1mblNGhvts8OI';
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

  getArtistas(termino: string) {
    return this.getQuery( `search?type=artist&limit=15&q=${termino}`)
    .pipe(map((data) => data['artists'].items));
  }

  getArtistaByid(id: string) {
    return this.getQuery( `artists/${id}`);
  }

  getTopTracksByIdArtista(id: string) {
    return this.getQuery( `artists/${id}/top-tracks?country=es`)
    .pipe(map((data) => data['tracks']));
  }
}
