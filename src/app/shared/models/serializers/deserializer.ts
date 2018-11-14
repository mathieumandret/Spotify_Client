export interface Deserializer<T> {
  fromJson(json: any): T
}
