import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const token =
      'BQD2CSjI3mxv4E35Givc83NBxD39E1D_WIrMfXuv07EwUdYEzgHHrOtUjAn7xCZGsAUf7GDe3nebfvAqOtE';
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?type=artist&limit=15&q=${termino}`).pipe(
      map((data) => data['artists'].items)
    );
  }

  getArtistaByid(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracksByIdArtista(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=es`).pipe(
      map((data) => data['tracks'])
    );
  }


  /*
   * Consumo de servicio web para generar token de la aplicacion
   * @author : Camilo Rivera
   * @Since  : 05-07-2020
   **/
  private generarToken(): string {
    let headersPeticion = new HttpHeaders();
    headersPeticion = headersPeticion.set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    const parametros = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', 'a02c5601c9224629aa632c32f8b588ab')
      .set('client_secret', 'be220004160f4e14bac2b673e24a5571');

    const urlToken = 'https://accounts.spotify.com/api/token';
    this.http
      .post(urlToken, parametros, { headers: headersPeticion })
      .subscribe(
        (data: any) => {
          console.log('respuesta :' + JSON.stringify(data));
          return data.access_token;
        },
        (errorServicio) => {
          console.log('Error: ' + JSON.stringify(errorServicio));
          return '';
        }
      );
    return '';
  }
}
