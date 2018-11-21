import {Resource} from '../../../../shared/models/resource'

export class Track extends Resource {
  artists?: string[]
  duration?: string
  url?: string
  albumName?: string
}
