import { AuthGuard } from './auth-guard.service';
import { PostService } from './blog/services/post.service';
import { PagesModule } from './pages/pages.module';
import { AuthService } from './auth.service';
import { HeaderModule } from './header/header.module';
import { UserService } from './users/services/user.service';
import { ApiService } from './services/api';
import {BrowserModule} from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AppRoutingModule,
    HeaderModule,
    PagesModule
  ],
  providers: [AuthService, AuthGuard, ApiService, UserService, PostService, { provide: LOCALE_ID, useValue: "es-ES" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
