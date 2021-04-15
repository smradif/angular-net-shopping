import { Injectable } from '@angular/core';
import { Theme } from '../models/theme.model';
import { StyleManagerService } from './style-manager.service';

@Injectable()
export class ThemeManagerService {
    private themes: Theme[] = [
        { primary: '#3F51B5', accent: '#E91E63', name: 'indigo-pink', isDark: false, isDefault: true },
        { primary: '#673AB7', accent: '#FFC107', name: 'deeppurple-amber', isDark: false, },
        { primary: '#E91E63', accent: '#607D8B', name: 'pink-grey', isDark: true },
        { primary: '#9C27B0', accent: '#4CAF50', name: 'purple-green', isDark: true }];

    constructor(private styleManager: StyleManagerService) {
    }

    public getThemes(): Theme[] {
        return this.themes;
    }

    public changeTheme(themeName: string) {
        const theme = this.themes.find(currentTheme => currentTheme.name === themeName);
        if (theme) {
            if (theme.isDefault) {
                this.styleManager.removeStyle('theme');
            } else {
                this.styleManager.setStyle('theme', `/assets/styles/${theme.name}.css`);
            }
        }
    }
}
