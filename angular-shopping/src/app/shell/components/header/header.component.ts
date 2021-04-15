import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from 'src/app/components/base.component';
import { ConfigService } from 'src/app/services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent extends BaseComponent implements OnInit, OnDestroy {

    public siteName: string = '';

    constructor(
        private configService: ConfigService) {
        super();
    }

    public ngOnInit(): void {
       this.siteName = this.configService.config.siteName;
    }
}

