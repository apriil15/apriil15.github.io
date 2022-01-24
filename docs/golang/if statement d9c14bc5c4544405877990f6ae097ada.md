# if statement

- 變數可以宣告在 if 的 condition 裡面，整個 `if...else` 裡面都能使用

```go
package main

import (
	"fmt"
)

func main() {
	// a 宣告在裡面
	if a := 5; a < 4 {
		fmt.Println("test")
	} else {
		fmt.Println(a) // 會印出 5
	}
}
```