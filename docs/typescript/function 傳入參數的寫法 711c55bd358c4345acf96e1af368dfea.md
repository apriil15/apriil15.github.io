# function 傳入參數的寫法

function 傳入參數的 type 可以用下面的寫法

1. 能夠增加閱讀性

```tsx
class Student {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

// 可以更準確表達想要傳入的參數為 Student 的 name
// Student['name']: indexed access type
function print(name: Student['name']) {
  console.log(name)
}

function oldPrint(name: string) {
  console.log(name)
}

// 都是印出 Sam
print('Sam')
oldPrint('Sam')
```