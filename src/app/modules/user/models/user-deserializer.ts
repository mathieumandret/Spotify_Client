import {Deserializer} from '../../../shared/models/serializers/deserializer'
import {User} from './user'

export class UserDeserializer implements Deserializer<User> {

  fromJson(json: any): User {
    const user = new User()
    user.id = json.id
    user.name = json.display_name
    return user
  }

}
