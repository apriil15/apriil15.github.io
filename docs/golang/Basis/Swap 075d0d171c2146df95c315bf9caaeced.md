# Swap

Golang 中 swap 寫法蠻方便的，之前解 LeetCode 有用過，但忘記惹，這次記錄下來！

如下：

- 兩個

```go
package main

import "fmt"

func main() {
	a := 1
	b := 2
	fmt.Println(a, b) // 1, 2

	a, b = b, a
	fmt.Println(a, b) // 2, 1
}
```

- 三個

```go
package main

import "fmt"

func main() {
	a := 1
	b := 2
	c := 3
	fmt.Println(a, b, c) // 1, 2, 3

	a, b, c = b, c, a
	fmt.Println(a, b, c) // 2, 3, 1
}
```