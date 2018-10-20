export class Artist {
  id: string
  name: string
  imageURL: string


  constructor(json: any) {
    this.id = json.id
    this.name = json.name
    this.imageURL = json.images.length > 1 ? json.images[1].url : './assets/images/default_artist.png'
  }
}
