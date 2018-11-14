import {Resource} from '../../../../shared/models/resource'

export class Track extends Resource {
  artists: string[]
  albumName: string
  duration: string
  url: string
}
