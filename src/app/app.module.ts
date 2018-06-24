import {environment} from '../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FirebaseOptionsToken} from 'angularfire2';

import { AppComponent } from './app.component';
import { SearchComponent } from './home/search/search.component';
import { BookmarksComponent } from './home/bookmarks/bookmarks.component';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';
import { AddBookmarkComponent } from './home/add-bookmark/add-bookmark.component';

import {AppRoutingModule} from './app-routing.module';
import {SettingRoutingModule} from './setting/setting-routing.module';
import {BookmarkService} from './home/service/bookmark.service';
import {SearchPipe} from './home/search/search.pipe';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SettingComponent,
    BookmarksComponent,
    AddBookmarkComponent,
    SearchPipe,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'tasks'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    RouterModule,
    SettingRoutingModule,
    CommonModule,
    SettingRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [BookmarkService,
    { provide: FirebaseOptionsToken, useValue: environment.firebase }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
