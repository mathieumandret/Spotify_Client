export interface Serializer<T> {
  toJson(resource: T): any
}
