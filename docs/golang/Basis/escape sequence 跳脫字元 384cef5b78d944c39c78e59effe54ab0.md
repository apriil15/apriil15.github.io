# escape sequence 跳脫字元

- `\n`：換行
- `\t`：跳位
- `\"`：引號
- `\\`：反斜線

```go
package main

import (
	"fmt"
)

func main() {
	// 換行 \n
	fmt.Println("test\n123")

	// 跳位 \t
	fmt.Println("test\t123")

	// 引號 \"
	fmt.Println("test\"123")

	// backslash \\
	fmt.Println("test\\123")
}
```