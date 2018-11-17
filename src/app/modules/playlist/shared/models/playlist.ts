import {Resource} from '../../../../shared/models/resource'
import {TrackDetails} from './track-details'

export class Playlist extends Resource {
  tracks?: TrackDetails[]
  imageURL?: string
  description?: string
  public ?: boolean
}
