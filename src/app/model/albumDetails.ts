import { Album } from './album';
import { Track } from './track';

export interface AlbumDetails extends Album {
    tracks: Track[];
}
