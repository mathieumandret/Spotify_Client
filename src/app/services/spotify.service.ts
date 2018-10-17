import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {Album} from '../model/album'
import {Artist} from '../model/artist'
import {Track} from '../model/track'
import {AlbumDetails} from '../model/albumDetails'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private readonly URL = 'https://api.spotify.com/v1/'
  private readonly URL_ALBUM = this.URL + 'search?type=album&market=FR&limit=10&q='
  private readonly URL_ARTIST = this.URL + 'search?type=artist&market=FR&limit=10&q='
  private readonly URL_ALBUM_DETAIL = this.URL + 'albums/'
  private readonly token = `BQDr7CXXXDA1qrvIs7Vi62pKDxDcmMyjY3J9SJNqIwyAm2UFLnJmQCgEJG1UQnb5FuzaBalq8sjqzf13thcbdT_30QvZMTeIuI2PxsQBIItR7jsA6IGE2XxKhqSlPxk00SKL91fTfw`
  private readonly headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  }

  constructor(private http: HttpClient) {
  }

  private parseAlbums(items: any[]): Album[] {
    return items.map(item => this.parseAlbum(item))
  }

  private parseArtists(items: any[]): Artist[] {
    return items.map(item => ({
      name: item.name,
      imageURL: (item.images && item.images.length > 0) ? item.images[0].url : undefined
    }))
  }

  private parseAlbum(item: any): Album {
    return {
      id: item.id,
      type: item.album_type,
      name: item.name,
      artists: this.parseArtists(item.artists),
      imageURL: (item.images && item.images.length > 0) ? item.images[0].url : undefined
    }
  }

  private parseTracks(album: any): Track[] {
    return album.tracks.items.map(item => ({
      title: item.name,
      duration: (item.duration_ms / 1000 / 60).toFixed(2),
      url: item.preview_url
    }))
  }

  private parseAlbumDetails(item: any): AlbumDetails {
    return {
      ...this.parseAlbum(item),
      tracks: this.parseTracks(item)
    }
  }

  getAlbums(keyword: string): Observable<Album[]> {
    return this.http.get<any>(this.URL_ALBUM + keyword, this.headers)
      .pipe(
        map(res => this.parseAlbums(res.albums.items))
      )
  }

  getArtists(keyword: string): Observable<Artist[]> {
    return this.http.get<any>(this.URL_ARTIST + keyword, this.headers)
      .pipe(
        map(res => this.parseArtists(res.artists.items))
      )
  }

  getAlbumDetails(id: string): Observable<AlbumDetails> {
    return this.http.get<any>(this.URL_ALBUM_DETAIL + id, this.headers)
      .pipe(
        map(res => this.parseAlbumDetails(res))
      )
  }
}
