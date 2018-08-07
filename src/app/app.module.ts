import {environment} from '../environments/environment.prod';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FirebaseOptionsToken} from 'angularfire2';

import {AppComponent} from './app.component';
import {SettingComponent} from './setting/setting.component';
import {BookmarksComponent} from './bookmarks/bookmarks.component';
import {AddBookmarkComponent} from './bookmarks/create/add-bookmark.component';

import {BookmarkService} from './bookmarks/service/bookmark.service';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '@angular/cdk/layout';
import {SettingService} from './setting/setting.service';
import {
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatProgressBarModule, MatProgressSpinnerModule , MatRadioModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {SearchPipe} from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    AddBookmarkComponent,
    SearchPipe,
    BookmarksComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'tasks'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    CommonModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule

  ],
  providers: [BookmarkService, SettingService,
    {provide: FirebaseOptionsToken, useValue: environment.firebase}
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
