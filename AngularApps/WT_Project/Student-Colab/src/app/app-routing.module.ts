import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { SignupComponent } from './modules/signup/signup.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { UserHomeComponent } from './modules/user-home/user-home.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { Page404Component } from './modules/page404/page404.component';
import { UserClubsComponent } from './modules/user-home/user-clubs/user-clubs.component';
import { UstoreComponent } from './modules/ustore/ustore.component';

const routes: Routes = [
  {
    path : '', component: WelcomeComponent,
    children: [{
        path: 'login',
        component: LoginComponent
      }, 
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'aboutus',
        component: AboutusComponent
      }
    ]
  },
  {
    path : 'welcome', component:WelcomeComponent
  },
  {
    path : 'login', component:LoginComponent
  },
  {
    path : 'signup', component:SignupComponent
  },
  {
    path : 'user-home', component: UserHomeComponent,
    children: [
      {
        path: 'user-clubs', outlet: 'clubs', component: UserClubsComponent,
      },
      {
        path: 'ustore', outlet: 'ustore', component: UstoreComponent,
      },
      {
        path: 'search', outlet: 'search', component: UstoreComponent,
      },
      {
        path: 'todo-list', outlet:'todo', component: UstoreComponent,
      }
    ]
  },
  {
    path : '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
