import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path : 'tabs',
    component: TabsPage,
    children : [
      {
        path: 'home',
        children : [
          {
            path: '',
            loadChildren : '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'gallery',
        children : [
          {
            path: '',
            loadChildren : '../gallery/gallery.module#GalleryPageModule',
            children: [
              {
                path: 'book',
                loadChildren : '../gallery/book/book.module#BookPageModule'
              }
              
            ]
          }
        ]
      },
      {
        path: 'timetable',
        children : [
          {
            path: '',
            loadChildren : '../timetable/timetable.module#TimetablePageModule'
          }
        ]
      },
      {
        path: 'about',
        children : [
          {
            path: '',
            loadChildren : '../about/about.module#AboutPageModule'
          }
        ]
      },
      {
        path: 'gallery/book',
        children : [
          {
            path: '',
            loadChildren : '../gallery/book/book.module#BookPageModule'
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
