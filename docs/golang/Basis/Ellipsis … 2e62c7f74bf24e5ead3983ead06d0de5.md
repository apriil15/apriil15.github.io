# Ellipsis …

## Concept

- Ellipsis：google 了一下，才知道是`省略`的意思XD
- 用途：
    1. variadic function 代表參數可以傳 n 個
    `...` 會把參數轉成 slice
    2. `slice…` 對 slice 做一個 `unpack` 的動作

# Demo

`sum` 是一個 `variadic function`，代表可以傳入 n 個 int

要注意的是，傳入 slice 時就要加上 `...`

```go
package main

import (
    "fmt"
)

func main() {
    result := sum(1, 2, 3)
    fmt.Println(result) // 6

    result = sum(1, 2, 3, 4)
    fmt.Println(result) // 10

    numbers := []int{1, 2, 3, 4}
    result = sum(numbers...)
    fmt.Println(result) // 10
}

// Variadic function
// 把很多個數字丟進來，回傳總和
func sum(numbers ...int) int {
    result := 0

    for _, number := range numbers {
        result += number
    }

    return result
}
```