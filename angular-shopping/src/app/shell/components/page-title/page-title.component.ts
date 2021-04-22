import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/components/base.component';
import { ConfigService } from 'src/app/services';
import { BasketStore } from 'src/app/store/basket.store';


@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})

export class PageTitleComponent extends BaseComponent implements OnInit, OnDestroy {

  public siteName: string = '';

  constructor(
    private configService: ConfigService,
    private router: Router,
    public store: BasketStore) {
    super();
  }

  public ngOnInit(): void {
    this.siteName = this.configService.config.siteName;
  }

  public goToHomepage() {
    this.router.navigate(['']);
  }

  public goToBasket(){
    this.router.navigate(['/basket']);
  }
}

