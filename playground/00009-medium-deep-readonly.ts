/*
  9 - Deep Readonly
  -------
  by Anthony Fu (@antfu) #medium #readonly #object-keys #deep

  ### Question

  Implement a generic `DeepReadonly<T>` which make every parameter of an object - and its sub-objects recursively - readonly.

  You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.

  For example:

  ```ts
  type X = {
    x: {
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }

  type Expected = {
    readonly x: {
      readonly a: 1
      readonly b: 'hi'
    }
    readonly y: 'hey'
  }

  type Todo = DeepReadonly<X> // should be same as `Expected`
  ```

  > View on GitHub: https://tsch.js.org/9
*/

/* _____________ Your Code Here _____________ */

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends (...args: any[]) => any
    ? T[K]
    : T[K] extends object
      ? DeepReadonly<T[K]>
      : T[K]
}

/**
这段代码定义了一个类型别名 `DeepReadonly<T>`，它将传入的泛型类型 `T` 中所有属性变
为只读（readonly）。其中使用了条件语句和递归调用自身来实现对嵌套对象的处理。具体地
说，对于 T 的每个属性 K，在新的类型中都会创建一个同名、但是只读的属性，并且根据该
属性值是否为函数或对象分别进行不同的处理：

- 如果该属性值是函数，则保持不变；
- 如果该属性值是对象，则递归调用 DeepReadonly 对其进行深度只读化。

最终返回一个完全只读化后的新类型。
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<DeepReadonly<X1>, Expected1>>,
  Expect<Equal<DeepReadonly<X2>, Expected2>>,
]

type X1 = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type X2 = { a: string } | { b: number }

type Expected1 = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  }
}

type Expected2 = { readonly a: string } | { readonly b: number }

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9/answer
  > View solutions: https://tsch.js.org/9/solutions
  > More Challenges: https://tsch.js.org
*/
