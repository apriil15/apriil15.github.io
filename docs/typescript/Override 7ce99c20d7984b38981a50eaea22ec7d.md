# Override

其實 `addMember()` 有沒有寫 `override` 不影響輸出結果

```tsx
class Department {
  addMember() {
    console.log('Department addMember')
  }
  grow() {
    console.log('Department grow')
  }
}

class ITDepartment extends Department {
  // override 不影響輸出結果
  override addMember() {
    console.log('ITDepartment addMember')
  }
}

const it = new ITDepartment()
it.addMember() // ITDepartment addMember
it.grow() // Department grow
```

但寫上去會更好

1. 假設某天手殘誤刪 base class (Department) 的方法，就會提醒我們出大事啦
2. 一目了然知道 override base class 的方法，不是新寫的

```tsx
class Department {
  // addMember() {
  //   console.log('Department addMember')
  // }
  grow() {
    console.log('Department grow')
  }
}

class ITDepartment extends Department {
  // This member cannot have an 'override' modifier because it is not declared
  // in the base class 'Department'.ts(4113)
  override addMember() {
    console.log('ITDepartment addMember')
  }
}

const it = new ITDepartment()
it.addMember() // ITDepartment addMember
it.grow() // Department grow
```