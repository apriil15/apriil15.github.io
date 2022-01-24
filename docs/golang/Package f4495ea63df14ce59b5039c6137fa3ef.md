# Package

- 重點就是 import 的路徑要 follow `go.mod` 去訂
    
    例如，一開始這樣初始化，path 為 `my_project`
    
    ```powershell
    $ go mod init my_project
    ```
    

- `go.mod` 就會像這樣
    
    ```go
    module my_project
    
    go 1.16
    ```
    

- 專案的結構
    
    ![https://i.imgur.com/ZvV42Qg.png](https://i.imgur.com/ZvV42Qg.png)
    
- main.go
    
    ```go
    package main
    
    import (
        "fmt"
        "my_project/module"
        "my_project/module/inner"
    )
    
    func main() {
        fmt.Println("main")
    
        module.Output() // 使用 module1.go
    
        inner.Output() // 使用 inner.go
    }
    
    ```
    
- module1.go
    
    ```go
    package module
    
    import (
        "fmt"
    )
    
    func Output() {
        fmt.Println("module1")
    }
    
    ```
    
- inner.go
    
    ```go
    package inner
    
    import (
        "fmt"
    )
    
    func Output() {
        fmt.Println("inner")
    }
    
    ```