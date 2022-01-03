import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  player = new Audio();

  constructor() {
    this.player.src = 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3';

    this.player.onplay = () => {
      if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: 'Lorem Ipsum',
          artist: 'Lorem Ipsum',
          album: 'Lorem Ipsum',
          artwork: [
            { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
            { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
            { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
            { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
            { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
            { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
          ]
        });
        console.log('init mediaSession metadata');
      } else {
        console.log('mediaSession not available');
      }
    };
  }

}
