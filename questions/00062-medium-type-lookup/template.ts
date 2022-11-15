type LookUp<U extends { type: string }, T extends string> = U extends {
  type: T
}
  ? U
  : never

type LookUp2<U, T extends string> = U extends { type: infer R }
  ? R extends T
    ? U
    : never
  : never

interface Cat {
  type: "cat"
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal"
}

interface Dog {
  type: "dog"
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer"
  color: "brown" | "white" | "black"
}

type Animal = Cat | Dog

type A = LookUp2<Animal, "cat">

