import {Artist} from './artist';

export interface Album {
    id: string
    type: string
    artists: Artist[]
    name: string
    imageURL: string
}
