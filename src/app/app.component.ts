import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {SettingService} from './setting/setting.service';
import {DEFAULT_SETTINGS, Settings, THEME_GREEN, THEME_PRIMARY, THEME_YELLOW} from './setting/setting.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  searchBm = '';
  settings: Settings = DEFAULT_SETTINGS;
  settingsSubscription: Subscription;

  constructor(private settingService: SettingService) {
  }

  onZoomInit() {
    document.body.style.zoom = this.settings.zoom;
  }
  ngOnDestroy() {
    this.settingsSubscription.unsubscribe();
  }
  ngOnInit() {
    this.settingService.initSettings();

    this.settingsSubscription = this.settingService.getSettings().subscribe(settings => {
      this.settings = settings;
      this.onZoomInit();
    });
  }


  getThemeClass() {
    switch (this.settings.themeId) {
      case THEME_GREEN:
        return 'default';
      case THEME_PRIMARY:
        return 'alternative';
      case THEME_YELLOW:
        return 'alt';
      default:
        return 'default';
    }
  }

}



