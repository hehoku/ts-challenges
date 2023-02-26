/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #easy #union #built-in

  ### Question

  Implement the built-in `Pick<T, K>` generic without using it.

  Constructs a type by picking the set of properties `K` from `T`

  For example:

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```

  > View on GitHub: https://tsch.js.org/4
*/

/* _____________ Your Code Here _____________ */

type MyPick<T, K extends keyof T> = { [k in K]: T[k] }

/**
 * In the TypeScript code type MyPick<T, K extends keyof T> = { [k in K]: T[k]; }, the [ ] and [k in K] are used in the context of creating a new type by picking a subset of properties from an existing type.

[ ] is used to create an object type literal. It defines a new object type with properties that are specified inside the brackets. For example, { [key: string]: number } defines an object type with keys of type string and values of type number.

[k in K] is called a mapped type. It allows us to iterate over the keys in a type K and apply a transformation to each key k. In the context of MyPick, [k in K] maps over the keys K and creates a new type with only the properties from T that are included in K. So if T is { a: string; b: number; c: boolean; } and K is 'a' | 'b', then MyPick<T, K> would be { a: string; b: number; }.
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4/answer
  > View solutions: https://tsch.js.org/4/solutions
  > More Challenges: https://tsch.js.org
*/
