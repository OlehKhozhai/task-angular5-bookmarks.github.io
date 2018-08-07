import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSelectChange} from '@angular/material';
import {SettingService} from './setting.service';
import {DEFAULT_SETTINGS, Settings, THEME_LIST, zoomsList} from './setting.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})

export class SettingComponent implements OnDestroy, OnInit {

  settings: Settings = DEFAULT_SETTINGS;
  settingsSubscription: Subscription;
  currentlyChange = '';
  themeList = THEME_LIST;
  zooms = zoomsList;

  constructor(private settingService: SettingService) {
  }

  onZoomChanged(event: MatSelectChange) {
    this.currentlyChange = event.value;
    this.settingService.setSetting('zoom', event.value);
  }

  onPrint() {
    window.print();
  }

  ngOnDestroy() {
    this.settingsSubscription.unsubscribe();
  }

  ngOnInit() {
    this.settingsSubscription = this.settingService.getSettings().subscribe(settings => {
      this.settings = settings;
    });
  }

  onChangeTheme(event) {
    this.settingService.setSetting('themeId', event.value);
  }
}
