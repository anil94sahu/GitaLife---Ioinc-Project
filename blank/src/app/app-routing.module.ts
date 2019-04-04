import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'book', loadChildren: './gallery/book/book.module#BookPageModule' },
  { path: 'audio', loadChildren: './gallery/audio/audio.module#AudioPageModule' },
  { path: 'video', loadChildren: './gallery/video/video.module#VideoPageModule' },
  { path: 'home', loadChildren: './admin/home/home.module#HomePageModule' }
  
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
