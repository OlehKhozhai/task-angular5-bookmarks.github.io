export interface Settings {
  fontSize?: string;
  themeId?: number;
  zoom?: string;
}

export const THEME_PRIMARY = 1;
export const THEME_GREEN = 2;
export const THEME_YELLOW = 3;
export const THEME_BY_DEFAULT = THEME_PRIMARY;

export const THEME_LIST = [
  {
    id: THEME_PRIMARY,
    name: 'Primary'
  },
  {
    id: THEME_GREEN,
    name: 'Codding'
  },
  {
    id: THEME_YELLOW,
    name: 'Relax'
  },
];

export const DEFAULT_SETTINGS = {
  themeId: THEME_BY_DEFAULT,
  zoom: '100%',
  fontSize: '12px'
};

export const ZOOM_75 = '75%';
export const ZOOM_100 = '100%';
export const ZOOM_125 = '125%';

export const zoomsList = [
  {value: ZOOM_75, viewValue: '75%'},
  {value: ZOOM_100, viewValue: '100%'},
  {value: ZOOM_125, viewValue: '125%'}
];


