import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {Observable} from 'rxjs'
import {Resource} from '../../shared/models/resource'
import {Album} from '../../modules/album/shared/models/album'
import {Artist} from '../../modules/artist/shared/models/artist'
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout'

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {

  @Input() resources$!: Observable<(Album | Artist)[]>
  @Input() clickable!: boolean
  @Output() clicked = new EventEmitter<Resource>()
  columns = 6
  mobileQuery = '(max-width: 600px)'

  constructor(private breakPointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.breakPointObserver.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.Small, this.mobileQuery])
      .subscribe(() => {
        if (this.breakPointObserver.isMatched(Breakpoints.Large)) {
          this.columns = 6
          return
        }
        if (this.breakPointObserver.isMatched(Breakpoints.Medium)) {
          this.columns = 4
          return
        }
        if (this.breakPointObserver.isMatched(Breakpoints.Small)) {
          this.columns = 2
          return
        }
        if (this.breakPointObserver.isMatched(this.mobileQuery)) {
          this.columns = 1
        }
      })
  }


  elementSelected(resource: Resource) {
    this.clicked.emit(resource)
  }

}
