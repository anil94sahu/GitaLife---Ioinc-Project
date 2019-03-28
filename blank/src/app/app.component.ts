import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public galleryMenu = [
    {title : 'Book', url : '/book',   icon : 'ION_IOS_BOOK'},    
    {title : 'Audio', url : '/audio', icon : 'ION_IOS_MUSICAL_NOTES'},      	
    {title : 'Video', url : '/video', icon : 'ION_IOS_VIDEOCAM'}   
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
