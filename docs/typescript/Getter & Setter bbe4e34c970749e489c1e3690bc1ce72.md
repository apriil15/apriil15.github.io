# Getter & Setter

- 調用方式如 property

```tsx
class Student {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  get name(): string {
    return this._name
  }
  set name(name: string) {
    this._name = name
  }
}

const student = new Student('Sam')

// use setter
student.name = 'Ken'

// use getter
console.log(student.name) // Ken
```