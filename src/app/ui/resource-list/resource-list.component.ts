import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Observable} from 'rxjs'
import {Resource} from '../../shared/models/resource'
import {Album} from '../../modules/album/shared/models/album'
import {Artist} from '../../modules/artist/shared/models/artist'

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent {

  @Input() resources$!: Observable<(Album | Artist)[]>
  @Input() clickable!: boolean
  @Output() clicked = new EventEmitter<Resource>()

  elementSelected(resource: Resource) {
    this.clicked.emit(resource)
  }
}
