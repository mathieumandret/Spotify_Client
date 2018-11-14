import {Component, EventEmitter, OnInit, Output} from '@angular/core'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() confirmed = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit() {
  }

  onConfirm(value: string) {
    if (value.trim().length > 0) {
      this.confirmed.emit(value.trim())
    }
  }

}
