/*
  898 - Includes
  -------
  by null (@kynefuk) #easy #array

  ### Question

  Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.

  For example:

  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```

  > View on GitHub: https://tsch.js.org/898
*/

/* _____________ Your Code Here _____________ */
type Includes<T extends readonly any[], U> = T extends [
  infer Key,
  ...infer Keys,
]
  ? Equal<Key, U> extends true
    ? true
    : Includes<Keys, U>
  : false

/**
This implementation of Includes is a recursive type that takes an array-like type
T and a type U, and returns a boolean value indicating whether U is included in T.

The function works by using the infer keyword to split the input array into its
first element Key and the remaining elements Keys. It then checks whether Key is
equal to U using the Equal type, which returns a boolean value. If Key is equal
to U, the function returns true. Otherwise, it recursively calls itself with the
remaining elements Keys until it reaches the end of the array or finds a match.
这个 Includes 的实现是一个递归类型，它接受一个类似数组的类型 T 和一个类型 U，并返
回一个布尔值，表示 U 是否包含在 T 中。

该函数使用 infer 关键字将输入数组拆分为其第一个元素 Key 和其余元素 Keys。然后使用
Equal 类型检查 Key 是否等于 U，它返回一个布尔值。如果 Key 等于 U，函数返回 true.
否则，它将使用剩余元素 Keys 递归调用自身，直到到达数组的末尾或找到匹配项。
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/898/answer
  > View solutions: https://tsch.js.org/898/solutions
  > More Challenges: https://tsch.js.org
*/
