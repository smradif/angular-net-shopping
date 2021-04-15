import { Component } from '@angular/core';
import { ConfigService } from 'src/app/services';
import { version } from '../../../../../package.json';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

    public copyright: string;
    public version: string;

    constructor(private configService: ConfigService) {
        this.copyright = this.configService.config.copyright;
        this.version = `rev ${version}`;
    }
}

