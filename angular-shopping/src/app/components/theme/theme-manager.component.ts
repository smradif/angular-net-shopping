import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Theme } from '../../models/theme.model';
import { ThemeManagerService } from '../../services/theme-manager.service';

@Component({
    selector: 'app-theme-manager',
    templateUrl: './theme-manager.component.html',
    styleUrls: ['./theme-manager.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ThemeManagerComponent implements OnInit {
    public currentTheme: Theme | undefined;
    public themes: Theme[] = [];
    constructor(private themeService: ThemeManagerService) {
    }

    ngOnInit(): void {
        this.themes = this.themeService.getThemes();
        this.currentTheme = this.themes[0];
    }

    public changeTheme(themeName: string) {
        this.currentTheme = this.themes.find(th => th.name === themeName);
        this.themeService.changeTheme(themeName);
    }
}
