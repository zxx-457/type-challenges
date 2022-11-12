type Shift<T extends Array<any>> = T extends [infer U, ...infer R] ? R : []
