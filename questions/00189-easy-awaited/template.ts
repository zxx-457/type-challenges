type MyAwaited<T extends Promise<any>> = T extends Promise<infer K>
  ? _FlattenPromise<K>
  : never
type _FlattenPromise<T> = T extends Promise<infer K> ? _FlattenPromise<K> : T

type FlattenArray<T extends Array<any>> = T extends Array<infer R>
  ? R extends Array<any>
    ? FlattenArray<R>
    : R
  : T

type F = FlattenArray<number[][][][]>
