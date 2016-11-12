import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginRoutingModule} from './login/login-routing.module';
import {LoginComponent} from './login/login.component';
import {firebaseConfig} from '../config';

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    MaterialModule.forRoot(),
    AppRoutingModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
