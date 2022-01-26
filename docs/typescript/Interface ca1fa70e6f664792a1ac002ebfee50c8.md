# Interface

- 用在對 object 形狀的描述
    
    宣告變數時，形狀要跟 interface 一致，多一個少一個都不行
    
    ### 可選屬性 ?:
    
    - 屬性後面加上 `?`，可寫可不寫
    - 也可以用在 method
    
    ### 任意屬性
    
    - 寫法：`[anyName: string]: any`
        
        前半段：自定義的名稱為 string
        
        後半段：值為 any type
        
    - 如果使用了任意屬性，則該 interface 其它屬性的型別都要是 any 的子集
    
    ### 唯讀屬性
    
    - 屬性前加上 `readonly`，宣告變數時一定要 assign，之後不能再 assign
    
    ### 範例
    
    - example 1
        
        ```tsx
        interface Person {
          readonly Name: string
          Age?: number
        
          // 如果把 any 改成 string，"Age?: number" 就會報錯，因為 number 不是 string 的子集
          [anyName: string]: any
        
          greet?(): void
        }
        
        const person: Person = {
          Name: 'Tom',
          //   Age: 27,
          Gender: 'male'
          //   greet() {
          //     console.log('hi there!')
          //   }
        }
        
        person.Name = 'Kevin' // Name 是 readonly 不能再 assign，會報錯
        ```
        
    - example 2
        
        ```tsx
        // 用來保留彈性 (也可以用 interface)
        type Container = {
          [key: string]: number
        }
        
        const c: Container = {
          aaa: 123,
          bbb: 456
        }
        
        console.log(c)
        ```
        
- 用在方法的抽象化（像 C#）
    - 一般寫法
    
    ```tsx
    interface Alarm {
      alert(): void;
    }
    
    interface Light {
      lightOn(): void;
      lightOff(): void;
    }
    
    class Door {}
    
    // 繼承類別，實現介面
    class SecurityDoor extends Door implements Alarm {
      alert() {
        console.log("SecurityDoor alert");
      }
    }
    
    // 實現多個介面
    class Car implements Alarm, Light {
      alert() {
        console.log("Car alert");
      }
      lightOn() {
        console.log("Car light on");
      }
      lightOff() {
        console.log("Car light off");
      }
    }
    ```
    
    - 介面繼承介面（可以繼承多個介面）
    
    ```tsx
    interface Alarm {
      alert(): void;
    }
    
    interface LightableAlarm extends Alarm {
      lightOn(): void;
      lightOff(): void;
    }
    ```
    
- 當作 function type
    - 不太知道用途
    
    ```tsx
    interface Add {
      (a: number, b: number): number
    }
    
    const add: Add = (a: number, b: number) => {
      return a + b
    }
    
    console.log(add(1, 2)) // 3
    ```
    

<aside>
💡 runtime 轉成 JS 後不會有 `interface`，單純 compile time 用（`type` 也是如此）

</aside>