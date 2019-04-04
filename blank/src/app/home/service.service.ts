import { Injectable } from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore, } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
export interface Home {
  title: string;
  subtitle: string;
  createdAt: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private homeCollection: AngularFirestoreCollection<Home>;
  private home: Observable<Home[]>;
  constructor(db: AngularFirestore,private alertController: AlertController) {
    this.homeCollection = db.collection<Home>('home', ref => ref.orderBy('createdAt','desc'));
    this.home = this.homeCollection.snapshotChanges().
                pipe(
                  map(actions => {
                    return actions.map(a => {
                      const data = a.payload.doc.data();
                      const id = a.payload.doc.id;
                      return {id, ...data};
                    });
                  })
                );
  }

  getHome(){
    return this.homeCollection.snapshotChanges().
    pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  removeHome(id){
    this.homeCollection.doc(id).delete();
  }


/* common service */
  /* extra functionality */

   async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '',
      message: message,
      buttons: [
        {
          text: 'Ok',
          role: 'ok',
          cssClass: 'secondary',
          handler: (blah) => {
            
          }
        }
      ]
    });

    await alert.present();
  }

}
