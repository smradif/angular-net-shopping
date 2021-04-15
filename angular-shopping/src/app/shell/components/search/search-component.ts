import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../../components/base.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends BaseComponent implements OnInit, OnDestroy {
  public text: string = '';
  @Output() public onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    super();
  }

  ngOnInit() {
  }

  search() {
    if (this.text) {
      this.onSearch.emit(this.text);
    }
  }
}
