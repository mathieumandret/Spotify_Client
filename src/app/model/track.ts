export class Track {
  id: string
  url: string
  title: string
  duration: string

  constructor(json: any) {
    this.id = json.id
    this.title = json.name
    this.duration = (json.duration_ms / 1000 / 60).toFixed(2)
    this.url = json.preview_url
  }

}
