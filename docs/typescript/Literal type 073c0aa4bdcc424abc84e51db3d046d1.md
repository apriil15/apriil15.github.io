# Literal type

- String Literal 字串字面量：用來限制只能是定義的字串，可以配合 `union`

```tsx
type Language = 'TS' | 'Golang'

function print(choice: Language): void {
  if (choice == 'Golang') {
    console.log(choice)
    return
  } else if (choice == 'TS') {
    console.log(choice)
    return
  }
  throw new Error()
}

print('Golang')
```

- useful pattern
所有 type 都有一個共同的 field，而且使用 string literal，TS 會提示不用怕寫錯

```tsx
type Bird = {
  type: 'bird'
  flySpeed: number
}

type Horse = {
  type: 'horse'
  runSpeed: number
}

type Animal = Bird | Horse

function print(animal: Animal) {
  switch (animal.type) {
    case 'bird': // 不用怕寫錯
      console.log('i am bird')
      break
    case 'horse':
      console.log('i am horse')
      break
  }
}
```