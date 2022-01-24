# Closure

- closure 往往跟 [first-class function](First-Class%20function%205082af28a52d49d080d95d2a61c90ebe.md) 有關

## Example

```go
package main

import (
	"fmt"
)

func main() {
	// 變數 t 其實就是 func() int
	t := test()

	// 調用變數 t，也就是調用 func() int
	fmt.Println(t()) // 1
	fmt.Println(t()) // 2
	fmt.Println(t()) // 3
	fmt.Println(t()) // 4

	o := test()
	fmt.Println(o()) // 1

}

func test() func() int {
	i := 0

	// 調用 test() 會回傳這個 func
	return func() int {
		i++
		return i
	}
}
```

```go
package main

import "fmt"

type Getter func() int
type Setter func(int)

// getter, setter 這兩個 closure 的 x 為同一個變數
func x_getter_setter(x int) (Getter, Setter) {
	fmt.Printf("the parameter :\tx (%p) = %d\n", &x, x)

	getter := func() int {
		fmt.Printf("getter: %p\n", &x)
		return x
	}
	setter := func(n int) {
		x = n
		fmt.Printf("setter: %p\n", &x)
	}
	return getter, setter
}

func main() {
	getX, setX := x_getter_setter(10)

	fmt.Println(getX()) // 10
	setX(20)
	fmt.Println(getX()) // 20
}
```