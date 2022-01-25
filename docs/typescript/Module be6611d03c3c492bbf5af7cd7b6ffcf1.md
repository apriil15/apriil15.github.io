# Module

- 關鍵字：`export`、`import`

student.ts

```tsx
export class Student {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  printName = () => {
    console.log(this.name);
  };
}

export let age: number = 38;
```

有三種方式：

- import 特定東西
    
    ```tsx
    import { Student, age } from "./student";
    
    let student = new Student("Kappa");
    student.printName();
    
    console.log(age);
    ```
    
- 整個 import
    
    ```tsx
    import * as Student from "./student";
    
    let student = new Student.Student("Kappa");
    student.printName();
    
    console.log(Student.age);
    ```
    
- import 並修改命名
    
    ```tsx
    import { Student as Stu, age as ageTest } from "./student";
    
    let student = new Stu("Kappa");
    student.printName();
    
    console.log(ageTest);
    ```