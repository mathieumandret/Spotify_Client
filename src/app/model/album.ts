export class Album {

  id: string
  type: string
  artists: string[]
  name: string
  imageURL: string

  constructor(json: any) {
    this.id = json.id
    this.type = json.album_type
    this.name = json.name
    this.artists = json.artists.map((artist: any) => artist.name)
    this.imageURL = json.images.length > 0 ? json.images[0].url : './assets/images/default_album.jpg'
  }

}
