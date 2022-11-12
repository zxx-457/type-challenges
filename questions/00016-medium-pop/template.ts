type Pop<T extends any[]> = T extends [...infer U, infer R] ? [...U] : []

