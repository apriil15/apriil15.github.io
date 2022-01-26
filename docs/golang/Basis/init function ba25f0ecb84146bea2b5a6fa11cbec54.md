# init function

- package 內可以宣告多個 `init()`，且會一一執行
- 作用時間為 main() 之前

```go
package main

import "fmt"

func init() {
	fmt.Println("init 1")
}

func init() {
	fmt.Println("init 2")
}

func main() {
	fmt.Println("Hello Go")
}
```

會印出：

init 1
init 2
Hello Go

- import package 時，如果只會用到 init()，就得在前面加上 `_`

```go
package main

import (
	"fmt"
	_ "practice_go/init_test"
)

func main() {
	fmt.Println("main")
}
```

```go
package init_test

import (
	"fmt"
)

func init() {
	fmt.Println("init")
}

func Test1() {
	fmt.Println("test1")
}

func Test2() {
	fmt.Println("test2")
}
```

會印出：

init
main