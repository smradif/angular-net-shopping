import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SocialItem } from 'src/app/models';
import { ConfigService } from 'src/app/services';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent extends BaseComponent implements OnInit, OnDestroy {

  @Input() size: number = 1.5;
  public socialItems: SocialItem[] = [];

  constructor(public configService: ConfigService) {
    super();
  }

  ngOnInit() {
    this.socialItems = this.configService.config.socialItems;
  }
}
