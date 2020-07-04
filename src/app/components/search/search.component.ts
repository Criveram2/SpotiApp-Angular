import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas: any[] = []; 

  constructor(private spotifyService: SpotifyService) { }


  buscar(termino: string){
    console.log(termino);
    this.spotifyService.getArtista(termino).subscribe( (data: any) =>
    {
      this.artistas = data;
      console.log( this.artistas);
    });
  }
}
