type MyOmit<T, K> = _Pick<T, _Exclude<keyof T, K>>

type _Pick<T, K extends keyof T> = {
  [R in K]: T[R]
}

type _Exclude<T, K> = T extends K ? never : T
