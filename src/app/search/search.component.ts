import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() title
  @Output() submitted = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit() {
  }

  onFormSubmit(key: string) {
    this.submitted.emit(key)
  }

}
