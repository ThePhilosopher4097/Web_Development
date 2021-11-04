import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path : ' ', redirectTo:' ', pathMatch:'full'
  },
  {
    path : 'login', component:LoginComponent
  },
  {
    path : 'about-us', component:AboutUsComponent
  },
  {
    path : 'gallery', component:GalleryComponent
  },
  {
    path : '**', component:Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
