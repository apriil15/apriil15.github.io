# Blank Identifier \_

在 Golang 裡面，宣告的變數就一定要用，不然 compiler 會報錯。

但有時候，使用的方法會回傳我們用不到的東西，這時候就可以用空白標記 `_` 來處理

## Example

`for range` 會回傳 `index` 與 `value`，不需要 index 時，就可以用 `_`

```go
package main

import (
    "fmt"
)

func main() {

    names := []string{"name1", "name2", "name3"}
    for _, name := range names {
        fmt.Println(name)
    }
    // name1
    // name2
    // name3

    numbers := []int{5, 10, 15}
    for index, number := range numbers {
        fmt.Println(index, number)
    }
    // 0 5
    // 1 10
    // 2 15
}
```

## Reference

[What is "\_," (underscore comma) in a Go declaration?](https://stackoverflow.com/questions/27764421/what-is-underscore-comma-in-a-go-declaration)
