import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

nuevasCanciones: any[] = [];

  constructor( private spotifyService: SpotifyService) {
    this.spotifyService.getNewReleases().subscribe( (data: any) =>
    {
         this.nuevasCanciones = data.albums.items;
         console.log( this.nuevasCanciones );
    });
   }

  ngOnInit(): void {
  }

}
