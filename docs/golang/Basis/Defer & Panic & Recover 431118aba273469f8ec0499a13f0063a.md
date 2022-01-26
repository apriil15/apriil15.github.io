# Defer & Panic & Recover

## Defer

defer：在 function 結束之前，一定會執行

### 多個 defer 執行時，會先進後出

- 像資料結構 `Stack`

```go
package main

import "fmt"

func main() {
	defer fmt.Println("first")
	defer fmt.Println("second")

	fmt.Println("test")
}
```

印出的結果：
test
second
first

### defer 中的值在執行時就會寫入

```go
package main

import (
	"fmt"
)

func main() {
	number := 1

	defer fmt.Println(number) // 1

	number++

	fmt.Println(number) // 2
}
```

印出的結果：
2
1

### defer 可以用在 function return 具名的變數

當 function return 的值是具名的變數時，defer 可以去修改最終 return 的值

- example 1

```go
package main

import "fmt"

func main() {
	i := test()

	fmt.Println(i)
}

// 會 return 87
func test() (i int) {
	defer func() {
		i = 87
	}()
	return 5
}
```

- example 2

```go
package main

import "fmt"

func main() {

	i := test()

	fmt.Println(i)
}

// 會 return 8888
func test() (i int) {
	defer func() {
		i = 8888
	}()
	defer func() {
		i = 87
	}()

	return 5
}
```

## Panic

概念就像 `throw Exception`
panic 後，function 如果有 defer，就會執行，然後把 panic 拋出去

## Recover

概念就像 `catch`

在 `deferred function` 中使用才會有效

## 綜合例子

`test2()`：有幾個 defer 進到 stack →  panic → 必須執行 defer

`test()`：panic 被 defer recover，後半段 `fmt.Println("after test2")` 不再執行

`main()`：recover 後，繼續執行

```go
package main

import "fmt"

func main() {
	test()

	fmt.Println("continue")
}

func test() {
	defer func() {
		r := recover()
		if r != nil {
			fmt.Println("recover", r)
		}
	}()

	test2()

	// defer recover 後，這邊不再運作
	fmt.Println("after test2")
}

func test2() {
	defer fmt.Println("test defer 1")
	defer fmt.Println("test defer 2")
	defer fmt.Println("test defer 3")

	fmt.Println("test2")

	fmt.Println("is going to panic")
	panic("panic")
}
```