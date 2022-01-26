# Function

- Function Declaration 函式宣告
    
    JS
    
    ```jsx
    function sum(x, y) {
        return x + y;
    }
    ```
    
    改寫成 TS
    
    ```tsx
    function sum(x: number, y: number): number {
      return x + y;
    }
    ```
    
- Function Expression 函式表示式
    
    JS
    
    ```jsx
    var mySum = function (x, y) {
        return x + y;
    };
    ```
    
    改寫成 TS
    
    ```tsx
    // 只有對右邊匿名 function 定義型別
    // 左邊 sum2 的型別是 assign 時，才型別推論出來的
    let sum2 = function (x: number, y: number): number {
      return x + y
    }
    
    // TS 中的 "=>" 表示函式的定義，左邊是輸入型別，右邊是輸出型別
    let sum3: (x: number, y: number) => number = function (
      x: number,
      y: number
    ): number {
      return x + y
    }
    ```
    
- Arrow Function
    
    一般寫法
    
    ```tsx
    let sum = (x: number, y: number): number => {
      return x + y;
    };
    
    let sum2 = (x: number, y: number): number => x + y;
    
    console.log(sum(1, 2));
    ```
    
    在 class 的寫法（基本上是一樣的）
    
    ```tsx
    class Student {
      name: string;
      constructor(name: string) {
        this.name = name;
      }
    
      printName = () => console.log(this.name);
    }
    
    let student: Student = new Student("Kappa");
    student.printName();
    ```
    
- 用 interface 來定義 function
    
    ```tsx
    interface Sum {
      (x: number, y: number): number;
    }
    
    let test: Sum = function (x: number, y: number): number {
      return x + y;
    };
    
    console.log(test(1, 2));
    ```
    
- 可選參數
    - 參數後面加上 `?`
    - 可選參數一定要放在必要參數的後面
    
    ```tsx
    // z 為可選參數
    function sum(x: number, y: number, z?: number): number {
      if (z) {
        return x + y + z
      }
      return x + y
    }
    
    console.log(sum(1, 2))
    console.log(sum(1, 2, 3))
    ```
    
- 參數有 default 值
    
    ```tsx
    function add(a: number, b: number = 12): number {
      return a + b
    }
    
    console.log(add(12)) // 24
    ```
    
- 剩餘參數 rest parameter
    - 參數前面加上 spread operator `...`
    - 會把當前位置的參數到最後一個 merge 成陣列
    - 類似 Golang 的 `variadic function` [Ellipsis …](https://www.notion.so/Ellipsis-2e62c7f74bf24e5ead3983ead06d0de5)
    
    ```tsx
    // 計算打折後的餐費
    function calculateFoodFee(
      discount: number,
      ...initFoodFee: number[]
    ): number[] {
      return initFoodFee.map((foodFee) => foodFee * discount);
    }
    
    console.log(calculateFoodFee(0.8, 80, 100, 120)); // [ 64, 80, 96 ]
    ```
    
- Overload
    
    ```tsx
    // 定義
    function sum(x: number, y: number): number
    function sum(x: string, y: string): string
    
    // 實現
    function sum(x: number | string, y: number | string): number | string {
      if (typeof x === 'number' && typeof y === 'number') {
        return x + y
      } else if (typeof x === 'string' && typeof y === 'string') {
        return x + y
      }
      throw new Error()
    }
    
    // 可以明確地知道目前是用哪個 function
    console.log(sum(1, 2))
    console.log(sum('a', 'b'))
    ```
    
- callback
    - 當參數時 return 可以寫成 void，即便實際上有回傳值
    
    ```tsx
    // 第二個參數這個 function 定義是不回傳
    function test(a: number, callback: (num: number) => void) {
      const result = callback(a)
    
      console.log(result)
    }
    
    // 實際有回傳沒差
    function callback(num: number) {
      return num
    }
    
    test(1, callback) // 1
    ```