type Chainable<T = {}> = {
  option<K extends string, V extends any>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<TheOmit<T, K> & { [Key in K]: V }>
  get(): T
}

type TheExluce<T, K> = T extends K ? never : T
type TheOmit<T, K extends string | number | Symbol> = {
  [P in TheExluce<keyof T, K>]: T[P]
}
