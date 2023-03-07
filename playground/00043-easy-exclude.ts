/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in #union

  ### Question

  Implement the built-in Exclude<T, U>

  > Exclude from T those types that are assignable to U

  For example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > View on GitHub: https://tsch.js.org/43
*/

/* _____________ Your Code Here _____________ */

type MyExclude<T, U> = T extends U ? never : T

/**
This is a TypeScript code that defines a generic (泛型) type MyExclude which takes
two type parameters T and U.

The type MyExclude uses a conditional type that checks if T extends (延长) U. If
T extends (延长) U, then the type never is returned. Otherwise, the type T is returned.

In other words, MyExclude returns a new type that excludes any type in T that is
assignable to U. It is similar to the built-in Exclude type in TypeScript.
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/
