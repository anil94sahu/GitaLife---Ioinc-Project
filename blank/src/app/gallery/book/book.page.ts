import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      this.data = ['a','b','c','d','e','f','r','t','y','u','i','o','p','q','w','e','r','t','y','u'];
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  /* backToGallery(){
    this.router.navigate(['tabs/gallery'])
  } */

}
