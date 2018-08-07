import {Injectable} from '@angular/core';
import {Settings, THEME_BY_DEFAULT} from './setting.model';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable()

export class SettingService {
  private LOCAL_STORAGE_ITEM_KEY = 'settings';
  private DEFAULT_SETTINGS = {
    zoom: '100%',
    fontSize: 'middle',
    themeId: THEME_BY_DEFAULT,
  };
  settings: BehaviorSubject<Settings>;

  constructor() {
    this.settings = new BehaviorSubject(this.getLocalStorageSettings());
  }

  setSetting(key, value) {
    const settings = this.getLocalStorageSettings();
    if (settings) {
      this.updateSettings({...settings, ...{[key]: value}});
    }
  }

  updateSettings(newSettings) {
    this.settings.next(newSettings);
    localStorage.setItem(this.LOCAL_STORAGE_ITEM_KEY, JSON.stringify(newSettings));
  }

  initSettings() {
    if (this.getLocalStorageSettings() === null) {
      localStorage.setItem(this.LOCAL_STORAGE_ITEM_KEY, JSON.stringify(this.DEFAULT_SETTINGS));
    }
  }

  /**
   * @return Object|null
   */
  getLocalStorageSettings() {
    const setting = localStorage.getItem(this.LOCAL_STORAGE_ITEM_KEY);
    if (setting) {
      return JSON.parse(setting);
    }

    return null;
  }

  getSettings(): Observable<Settings> {
    return this.settings;
  }



}


