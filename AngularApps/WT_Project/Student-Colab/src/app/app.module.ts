import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UStoreComponent } from './ustore/ustore.component';
import { LoginComponent } from './login/login.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SignupComponent } from './signup/signup.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, FormArray, FormControl, ValidatorFn} from '@angular/forms';
import { MatCheckboxModule, MatCheckboxDefaultOptions, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarDirective } from './dashboard/sidebar.directive';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UStoreComponent,
    LoginComponent,
    StudentHomeComponent,
    WelcomeComponent,
    SignupComponent,
    SidebarDirective,
    DashboardComponent
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
  providers: [{provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions}],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);