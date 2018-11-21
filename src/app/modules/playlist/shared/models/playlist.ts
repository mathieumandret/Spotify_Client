import {Resource} from '../../../../shared/models/resource'
import {Track} from '../../../album/shared/models/track'
import {User} from '../../../user/models/user'

export class Playlist extends Resource {
  tracks?: Track[]
  imageURL?: string
  description?: string
  public ?: boolean
  owner?: User
  canWrite = false
}
