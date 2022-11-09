type DeepReadonly<T> = {
  readonly [Key in keyof T]: T[Key] extends
    | Record<string, unknown>
    | Array<unknown>
    ? DeepReadonly<T[Key]>
    : T[Key]
}

type DeepReadOnly2<T> = {
  readonly [Key in keyof T]: T[Key] extends infer U
    ? U extends (...args: any) => any
      ? U
      : DeepReadonly<U>
    : never
}

type Text = {
  x: string
  y: string
  z: {
    p: string
  }
}

type W = DeepReadonly<Text>
