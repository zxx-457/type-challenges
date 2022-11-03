type Length<T extends ReadonlyArray<any>> = T extends [] ? 0 : T["length"]

type LengthV2<T> = T extends { length: infer K } ? K : never

type LengthV3<T extends readonly any[]> = T["length"]
