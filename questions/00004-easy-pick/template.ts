type MyPick<T, K extends keyof T> = {
  [index in K]: T[index]
}