import {Resource} from '../../../../shared/models/resource'
import {Track} from './track'

export class Album extends Resource {
  imageURL?: string
  artists?: string[]
  tracks?: Track[]
}
