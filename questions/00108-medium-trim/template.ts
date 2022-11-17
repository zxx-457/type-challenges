type Space_ = " " | "\n" | "\t"
type Trim<S extends string> = S extends `${Space_}${infer Body}`
  ? Trim<Body>
  : S extends `${infer Body_}${Space_}`
  ? Trim<Body_>
  : S

type Trim_<S extends string> = S extends
  | `${Space_}${infer Body}`
  | `${infer Body}${Space_}`
  ? Trim<Body>
  : S
