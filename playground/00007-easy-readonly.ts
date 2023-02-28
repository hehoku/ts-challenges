/*
  7 - Readonly
  -------
  by Anthony Fu (@antfu) #easy #built-in #readonly #object-keys

  ### Question

  Implement the built-in `Readonly<T>` generic without using it.

  Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

  For example:

  ```ts
  interface Todo {
    title: string
    description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  ```

  > View on GitHub: https://tsch.js.org/7
*/

/* _____________ Your Code Here _____________ */

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
}

/**
 * explain code
readonly: TypeScript additionally has a readonly modifier for properties.

In TypeScript, the syntax [k in K] and [P in keyof T] are both examples of mapped types.

[k in K] creates a new type by mapping over the keys k in the type K. For example, given the type type MyType = { a: string, b: number }, [k in keyof MyType] would result in the type { a: any, b: any }.

On the other hand, [P in keyof T] creates a new type by mapping over the keys P in the type keyof T. For example, given the type type MyType = { a: string, b: number }, [P in keyof MyType] would result in the type "a" | "b".

So, the key difference is that [k in K] maps over a specific type K, whereas [P in keyof T] maps over the keys of a specific type T.

```typescript
type Point = { x: number; y: number };
type K = "x" | "y";
type P = keyof Point;

// These two types are equivalent
type A = { [k in K]: string };
type B = { x: string; y: string };

// These two types are not equivalent
type C = { [P in keyof Point]: string };
// type C = { x: string; y: string; };
type D = { x: string; y: string; z: string };
```

 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
  Expect<NotEqual<C, D>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type Point = { x: number; y: number }
type K = 'x' | 'y'
type P = keyof Point

// These two types are equivalent
type A = { [k in K]: string }
type B = { x: string; y: string }

// These two types are not equivalent
type C = { [P in keyof Point]: string }
type D = { x: string; y: string; z: string }

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/7/answer
  > View solutions: https://tsch.js.org/7/solutions
  > More Challenges: https://tsch.js.org
*/
