import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SettingRoutingModule} from './setting/setting-routing.module';
import {SettingComponent} from './setting/setting.component';
import {HomeComponent} from './home/home.component';


const appRoutes: Routes = [
  {path: 'setting', component: SettingComponent},
  {path: '', component: HomeComponent}

];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
