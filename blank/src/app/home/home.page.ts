import { Component, OnInit } from '@angular/core';
import { HomeService, Home } from './service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  home: any;
  constructor(private _homeService: HomeService, private alertController: AlertController) {
  }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this._homeService.getHome()
    .subscribe(res => {
      const val = res.map(item => Object.assign(item, {check : true}));
      this.home = val;
    },
    err => {
      this._homeService.presentAlert('page not refresh due to internet connection');
    });
  }

  removePost(item) {
    this.presentAlertConfirm(item);
  }

  /* extra functionality */
  async presentAlertConfirm(item?) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to delete your post ?',
      buttons: [
     /*    {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, */ {
          text: 'Okay',
          handler: () => {
            if (item && item.id) {
              this._homeService.removeHome(item.id);
              this._homeService.presentAlert('Your post remove successfully');
              this.getPost();
            }

          }
        }
      ]
    });

    await alert.present();
  }


}
