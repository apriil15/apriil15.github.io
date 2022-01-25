# Object literal

在 JS 可以這樣寫，但在 TS 這樣寫是行不通的

```jsx
let obj = {}

obj.name = "Sam"
obj.age = 18
console.log(obj);
```

可以直接用 `any` 繞過，但這樣寫不好

```tsx
let obj = {} as any

obj.name = 'Sam'
obj.age = 18
console.log(obj)
```

用 `type` 或 `interface` 會是比較好的作法

```tsx
type Student = {
  name: string
  age: number
}

let obj = {} as Student

obj.name = 'Sam'
obj.age = 18
console.log(obj)
```