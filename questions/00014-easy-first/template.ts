type First<T extends any[]> = T extends [] ? never : T[0]

type FirstV2<T extends any[]> = T extends [infer K,...infer _] ? K: never