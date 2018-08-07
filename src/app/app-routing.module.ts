import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookmarksComponent} from './bookmarks/bookmarks.component';
import {SettingComponent} from './setting/setting.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'bookmarks', pathMatch: 'full'},
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'setting', component: SettingComponent},
  {path: '**', redirectTo: 'bookmarks'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}




