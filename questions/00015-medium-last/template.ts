type Last<T extends any[]> = T extends [...infer R, infer U] ? U : never
