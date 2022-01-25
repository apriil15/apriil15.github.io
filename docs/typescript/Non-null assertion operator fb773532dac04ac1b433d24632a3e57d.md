# Non-null assertion operator

- 簡單講就是告訴 TS compiler 這個變數不會是 `null | undefined`（會是 defined）

例子：

```tsx
let nullable1: null | number;
let nullable2: undefined | string;

let foo = nullable1!; // type foo: number
let fooz = nullable2!; // type fooz: string
```

```tsx
function validateEntity(e?: Entity) {
  // Throw exception if e is null or invalid entity
}

function processEntity(e?: Entity) {
  validateEntity(e);

  // 因為 validateEntity 已經驗證完了，所以 e 一定不會是 null，但不加 ! 會報錯
  let s = e!.name; // Assert that e is non-null and access name
}

class Entity {
  constructor(public name?: string) {}
}
```

## Ref

[https://stackoverflow.com/questions/38874928/operator-in-typescript-after-object-method](https://stackoverflow.com/questions/38874928/operator-in-typescript-after-object-method)

[https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html)