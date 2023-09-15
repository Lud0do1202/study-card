import { Injectable } from '@angular/core';
import { Theme } from '../types/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /* ---------------------------------- Var --------------------------------- */
  palette: string[] = [
    this.getPrimaryColor('red-theme'), // Red
    this.getPrimaryColor('pink-theme'), // Pink
    // '#9C27B0', // Purple
    // '#673AB7', // Indigo
    // '#3F51B5', // Blue
    // '#03A9F4', // Light Blue
    // '#00BCD4', // Turquoise
    // '#4CAF50', // Green
    // '#8BC34A', // Light Green
    // '#FFD700', // Gold
    // '#FF9800', // Orangegold
    // '#FF5722', // Orange
    // '#9E9E9E', // Gray
    // '#607D8B', // Steel Blue
  ];
  defaultColor: string = this.palette[1];

  /* ------------------------------- Get Theme ------------------------------- */
  getTheme(color: string): Theme | undefined {
    const pureColor = color.toLocaleLowerCase();
    switch (pureColor) {
      // Red
      case this.palette[0]:
        return 'red-theme';

      // Pink
      case this.palette[1]:
        return 'pink-theme';

      // Undefined
      default:
        return undefined;
    }
  }

  /* --------------------- Get Primary Color From Theme --------------------- */
  getPrimaryColor(theme: Theme): string {
    switch (theme) {
      // Red
      case 'red-theme':
        return '#c00015';

      // Pink
      case 'pink-theme':
        return '#bc004b';

      // Undefined --> Never happen
      default:
        return '';
    }
  }
}
