export class Playlist {
  id: string
  name: string
  collaborative: boolean
  imageURL: string

  constructor(json: any) {
    this.id = json.id
    this.name = json.name
    this.collaborative = json.collaborative
    this.imageURL = json.images.length > 0 ? json.images[0].url : './assets/images/default_playlist.jpg'

  }

}
