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
    this.getPrimaryColor('purple-theme'), // Purple
    this.getPrimaryColor('blue-theme'), // Blue
    this.getPrimaryColor('light-blue-theme'), // Light blue
    this.getPrimaryColor('green-theme'), // Green
    this.getPrimaryColor('light-green-theme'), // Light green
    this.getPrimaryColor('yellow-theme'), // Yellow
    this.getPrimaryColor('orange-theme'), // Orange
    this.getPrimaryColor('deep-orange-theme'), // Deep orange
  ];
  defaultColor: string = this.getPrimaryColor('pink-theme'); // Default = pink

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

      // Purple
      case this.palette[2]:
        return 'purple-theme';

      // Blue
      case this.palette[3]:
        return 'blue-theme';

      // Light blue
      case this.palette[4]:
        return 'light-blue-theme';

      // Green
      case this.palette[5]:
        return 'green-theme';

      // Light green
      case this.palette[6]:
        return 'light-green-theme';

      // Yellow
      case this.palette[7]:
        return 'yellow-theme';

      // Orange
      case this.palette[8]:
        return 'orange-theme';

      // Deep orange
      case this.palette[9]:
        return 'deep-orange-theme';

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

      // Purple
      case 'purple-theme':
        return '#9a25ae';

      // Blue
      case 'blue-theme':
        return '#006493';

      // Light blue
      case 'light-blue-theme':
        return '#006876';

      // Green
      case 'green-theme':
        return '#006e1c';

      // Light green
      case 'light-green-theme':
        return '#3e6a00';

      // Yellow
      case 'yellow-theme':
        return '#705d00';

      // Orange
      case 'orange-theme':
        return '#8b5000';

      // Deep orange
      case 'deep-orange-theme':
        return '#b02f00';

      // Undefined --> Never happen
      default:
        return '';
    }
  }
}
