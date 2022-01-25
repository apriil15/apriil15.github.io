# type guard 型別判斷

<aside>
💡 常搭配 [union](%E5%90%84%E7%A8%AE%20Type%20%E6%A9%9F%E5%88%B6%2092123ecd9fc1470b85da70f84f52b6ea.md) 做使用

</aside>

- 最基本的類型可以用 `typeof` 做判斷
    
    ```tsx
    function getLength(something: string | number): number {
      if (typeof something === 'number') {
        return something.toString().length
      }
      return something.length
    }
    
    console.log(getLength('123'))
    console.log(getLength(123))
    ```
    
- custom type 可以用 `in` 來做判斷是否為某個 type
    
    ```tsx
    type Employee = {
      name: string
      department: string
    }
    type Leader = {
      name: string
      department: string
      authority: boolean
    }
    type UnknownEmployee = Employee | Leader
    
    function work(someone: UnknownEmployee) {
      if ('authority' in someone) {
        console.log(someone.authority)
        return
      }
      console.log('not leader')
    }
    
    const employee: Employee = {
      name: 'Tom',
      department: 'eng'
    }
    const leader: Leader = {
      name: 'Tom',
      department: 'eng',
      authority: true
    }
    
    work(employee) // not leader
    work(leader) // true
    ```
    
    - 寫成 class 裡面的 `method` 同理，可以用 `in`
    
    ```tsx
    class SWE {
      coding() {
        console.log('coding')
      }
    }
    class Manager {
      meeting() {
        console.log('meeting')
      }
    }
    type Employee = SWE | Manager
    
    function work(employee: Employee) {
      if ('coding' in employee) {
        employee.coding()
      }
      if ('meeting' in employee) {
        employee.meeting()
      }
    }
    work(new SWE())
    ```
    
- `class` 可以用 `instanceof`做判斷
    
    注意：`type 不能用 instanceof`
    
    ```tsx
    class SWE {
      coding() {
        console.log('coding')
      }
    }
    
    class Manager {
      meeting() {
        console.log('meeting')
      }
    }
    
    type Employee = SWE | Manager
    
    function work(employee: Employee) {
      if (employee instanceof SWE) {
        employee.coding()
      }
      if (employee instanceof Manager) {
        employee.meeting()
      }
    }
    
    work(new SWE())
    ```