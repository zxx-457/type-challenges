type ASpace_ = " " | "\t" | "\n"
type TrimLeft<S extends string> =
  S extends `${infer Head extends ASpace_}${infer Left}` ? TrimLeft<Left> : S


