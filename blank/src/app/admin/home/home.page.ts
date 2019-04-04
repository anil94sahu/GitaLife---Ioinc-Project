import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { HomeService } from './home.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  homeForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private _homeService: HomeService,
    private alertController: AlertController
    ) {
      
     }

  ngOnInit() {
    this.buildForm();
  }
/* build form on generation */
  buildForm(){
    this.homeForm = this.formBuilder.group({
      title: ['',Validators.required],
      subtitle: [''],
      createdAt: [new Date()],
      description:[''],
      image: ['']
  });
  }

  /*saving record  */
  saveRecord(home){
    if(this.homeForm.valid){
      this._homeService.addTodo(home)
      .then(() => {
        this.presentAlert('Your post save successfully.');
        this.reset();
      })
    }
    else {
      this.presentAlert('please fill mandatory field');
    }
   
  }

  /* reset form */
  reset(){
    this.homeForm.reset();
  }

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
