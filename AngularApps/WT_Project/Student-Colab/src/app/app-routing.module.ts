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
import { ClubHomeComponent } from './modules/user-home/user-clubs/club-home/club-home.component';
import { ClubChatsComponent } from './modules/user-home/user-clubs/club-home/club-chats/club-chats.component';
import { ClubEventsComponent } from './modules/user-home/user-clubs/club-home/club-events/club-events.component';
import { ClubMainComponent } from './modules/user-home/user-clubs/club-home/club-main/club-main.component';
import { ClubMeetComponent } from './modules/user-home/user-clubs/club-home/club-meet/club-meet.component';
import { ClubTeamComponent } from './modules/user-home/user-clubs/club-home/club-team/club-team.component';

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
        path: 'user-clubs', outlet: 'clubs', component: UserClubsComponent,children: [{
                                                                path: 'club-home',
                                                                component: ClubHomeComponent, children: [{
                                                                                        path: 'club-chat',
                                                                                        component: ClubChatsComponent
                                                                                      },
                                                                                      {
                                                                                        path: 'club-events',
                                                                                        component: ClubEventsComponent
                                                                                      },
                                                                                      {
                                                                                        path: 'club-main',
                                                                                        component: ClubMainComponent
                                                                                      },
                                                                                      {
                                                                                        path: 'club-meet',
                                                                                        component: ClubMeetComponent
                                                                                      },
                                                                                      {
                                                                                        path: 'club-team',
                                                                                        component: ClubTeamComponent
                                                                                      }
                                                                                  ]
                                                              }
                                                          ]
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
