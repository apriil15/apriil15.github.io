# Type Assertion / Casting

- 基本上跟 Golang 的同概念
- 如下面例子，有兩種寫法：
    1. `<type>something`
    2. `something as type`

```tsx
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length
  }
  return something.toString().length
}

function getLength2(something: string | number): number {
  if ((something as string).length) {
    return (something as string).length
  }
  return something.toString().length
}
```