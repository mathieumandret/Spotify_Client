import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() icon!: string
  @Input() title!: string
  @Input() selectedTitle!: string

  constructor() {
  }

  ngOnInit() {
  }

}
