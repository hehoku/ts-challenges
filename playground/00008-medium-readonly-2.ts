/*
  8 - Readonly 2
  -------
  by Anthony Fu (@antfu) #medium #readonly #object-keys

  ### Question

  Implement a generic `MyReadonly2<T, K>` which takes two type argument `T` and `K`.

  `K` specify the set of properties of `T` that should set to Readonly. When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.

  For example

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK
  ```

  > View on GitHub: https://tsch.js.org/8
*/

/* _____________ Your Code Here _____________ */

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & Omit<T, K>

/**
这段代码定义了一个泛型类型 `MyReadonly2`，它接受两个参数：T 和 K。其中 T 是一个对
象类型，K 是 T 中的键名集合。

该类型使用了 TypeScript 的映射类型语法 `[P in K]` 来遍历并将 K 中的所有键名变为只
读属性，并与原始对象中除去这些键之外的其他属性组成新的对象。

而 `&` 符号则表示取交集操作，即将上述两个对象进行交集运算得到最终结果。因此，最终
返回值是一个包含部分只读属性和部分可写属性的新对象。
 */

/* _____________ Test Cases _____________ */
import type { Alike, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'description' >, Expected>>,
]

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/8/answer
  > View solutions: https://tsch.js.org/8/solutions
  > More Challenges: https://tsch.js.org
*/
