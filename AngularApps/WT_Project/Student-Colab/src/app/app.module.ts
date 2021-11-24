import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './modules/login/login.component';
import { UserHomeComponent } from './modules/user-home/user-home.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SignupComponent } from './modules/signup/signup.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, FormArray, FormControl, ValidatorFn} from '@angular/forms';
import { MatCheckboxModule, MatCheckboxDefaultOptions, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UstoreComponent } from './modules/ustore/ustore.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { Page404Component } from './modules/page404/page404.component';
import { UserClubsComponent } from './modules/user-home/user-clubs/user-clubs.component';
import { ClubHomeComponent } from './modules/user-home/user-clubs/club-home/club-home.component';
import { ClubMainComponent } from './modules/user-home/user-clubs/club-home/club-main/club-main.component';
import { ClubChatsComponent } from './modules/user-home/user-clubs/club-home/club-chats/club-chats.component';
import { ClubEventsComponent } from './modules/user-home/user-clubs/club-home/club-events/club-events.component';
import { ClubTeamComponent } from './modules/user-home/user-clubs/club-home/club-team/club-team.component';
import { ClubMeetComponent } from './modules/user-home/user-clubs/club-home/club-meet/club-meet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserHomeComponent,
    WelcomeComponent,
    SignupComponent,
    UstoreComponent,
    AboutusComponent,
    Page404Component,
    UserClubsComponent,
    UserClubsComponent,
    ClubHomeComponent,
    ClubMainComponent,
    ClubChatsComponent,
    ClubEventsComponent,
    ClubTeamComponent,
    ClubMeetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    ListViewModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [{provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions},{provide: 'window', useFactory: getWindow }],
  bootstrap: [AppComponent]
})

export class AppModule { }
export function getWindow() { return window; }
platformBrowserDynamic().bootstrapModule(AppModule);