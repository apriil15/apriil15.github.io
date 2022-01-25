# Decorator

- 同一個 component 有多個 decorator 時，由下往上執行（`bottom-up`）
- Class 內部 decorator 會依序執行，然後執行 class decorator

```tsx
@classDecorator1
@classDecorator2('test') // 要執行 classDecorator2 才能拿到裡面回傳的 function
class Student {
  @propertyDecorator
  name: string

  constructor(name: string) {
    this.name = name
  }

  @methodDecorator
  getName(): string {
    return this.name
  }

  calculateNameLength(@parameterDecorator num: number): number {
    return this.name.length * num
  }
}

const student = new Student('Sam')
console.log(student.getName())
```

- class decorator
    
    寫法：`(target: any) => void`
    
    ```tsx
    function classDecorator1(target: any) {
      console.log('classDecorator1')
    }
    
    // 回傳一個滿足 class decorator 的 function
    function classDecorator2(tag: string) {
      return function (target: any) {
        console.log(tag)
        console.log('classDecorator2')
      }
    }
    ```
    
- method decorator
    
    寫法：`(target: any, propertyKey: string, descriptor: PropertyDescriptor) => void`
    
    ```tsx
    function methodDecorator(
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      // 取出原本的方法
      const originalMethod = descriptor.value
    
      // 讓方法指向裝飾過的新方法
      descriptor.value = function () {
        const name = originalMethod.call(this)
    
        return `My name is ${name}`
      }
    }
    ```
    
- parameter decorator
    
    寫法：`(target: any, propertyKey: string, parameterIndex: number) => void`
    
    ```tsx
    function parameterDecorator(target: any, propertyKey: string, index: number) {
      console.log('parameterDecorator')
    }
    ```
    
- property decorator
    
    寫法：`(target: any, propertyKey: string) => void`
    
    ```tsx
    function propertyDecorator(target: any, propertyKey: string) {
      console.log('propertyDecorator')
    }
    ```
    

## Reference

[TypeScript 學習之路─第十八章：裝飾器(Decorator)](https://magiclen.org/typescript-decorator/)