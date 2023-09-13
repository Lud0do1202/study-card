import { Injectable } from '@angular/core';
import * as Color from 'color';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /* ---------------------------------- Var --------------------------------- */
  palette: string[] = [
    '#FF3333', // Red
    '#E91E63', // Pink
    '#9C27B0', // Purple
    '#673AB7', // Indigo
    '#3F51B5', // Blue
    '#03A9F4', // Light Blue
    '#00BCD4', // Turquoise
    '#4CAF50', // Green
    '#8BC34A', // Light Green
    '#FFD700', // Gold
    '#FF9800', // Orangegold
    '#FF5722', // Orange
    '#9E9E9E', // Gray
    '#607D8B', // Steel Blue
  ];
  defaultColor: string = this.palette[1];

  /* --------------------------------- Theme --------------------------------- */
  setTheme(basedColor: string): void {
    // Get the theme
    const color = Color(basedColor);
    const theme = this.getTheme(color);

    // Set the var
    document.documentElement.style.setProperty('--light-color', theme.light);
    document.documentElement.style.setProperty('--normal-color', theme.normal);
    document.documentElement.style.setProperty('--dark-color', theme.dark);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    document.documentElement.style.setProperty('--background-color', theme.background);
    document.documentElement.style.setProperty('--on-light-color', theme.onLight);
    document.documentElement.style.setProperty('--on-normal-color', theme.onNormal);
    document.documentElement.style.setProperty('--on-dark-color', theme.onDark);
    document.documentElement.style.setProperty('--on-accent-color', theme.onAccent);
    document.documentElement.style.setProperty('--on-background-color', theme.onBackground);
  }

  /* ------------------------------- Get Theme ------------------------------ */
  private getTheme(color: Color) {
    // Text color
    const blackText = '#212121';
    const whiteText = '#ffffff';
    const onColor = (c: Color) => (c.isLight() ? blackText : whiteText);

    // Color
    const light = color.lighten(0.5);
    const normal = color;
    const dark = color.darken(0.3);
    const accent = color.saturate(0.6).lighten(0.15);
    const background = color.lighten(0.9);

    const onLight = onColor(light);
    const onNormal = onColor(normal);
    const onDark = onColor(dark);
    const onAccent = onColor(accent);
    const onBackground = onColor(background);

    return {
      light: light.hex(),
      normal: normal.hex(),
      dark: dark.hex(),
      accent: accent.hex(),
      background: background.hex(),
      onLight,
      onNormal,
      onDark,
      onAccent,
      onBackground,
    };
  }
}
