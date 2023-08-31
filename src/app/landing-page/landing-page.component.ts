import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {


  peliculasEnCines;
  
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [{
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://static.posters.cz/image/1300/posters/spider-man-gotcha-i127936.jpg'
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99,
        poster: 'https://www.geekmi.news/__export/1686695083039/sites/debate/img/2023/06/13/moana-maui.jpg_423682103.jpg'
      }]
    }, 500);
  }
  peliculasProximosEstrenos = [{
    titulo: 'Avatar',
    fechaLanzamiento: new Date(),
    precio: 1400.99,
    poster: 'https://pics.filmaffinity.com/avatar_the_way_of_water-722646748-mmed.jpg'
  },
  {
    titulo: 'Toy Story',
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 300.99,
    poster: 'https://cdn.kobo.com/book-images/d8f42e7d-95bb-48a3-82fe-d4728d54be0c/1200/1200/False/toy-story-2-5.jpg'
  },
  {
    titulo: 'Annabelle',
    fechaLanzamiento: new Date(),
    precio: 500.99,
    poster: 'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXD8DNC/image?locale=es-es&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg'
  }];
}
