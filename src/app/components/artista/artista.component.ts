import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {
  artista: any = {};
  topTracks: any[] =[]; 
  loading: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.loading = true;
    this.spotifyService.getArtistaByid(id).subscribe((artista: any) => {
      this.artista = artista;
      this.loading = false;
    });
  }


  getTopTracks(id: string){
    this.spotifyService.getTopTracksByIdArtista(id).subscribe((topTracks: any) => {
     console.log(topTracks);
     this.topTracks = topTracks;
    });
  }
}
