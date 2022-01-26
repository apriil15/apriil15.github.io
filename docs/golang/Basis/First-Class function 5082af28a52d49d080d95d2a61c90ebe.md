# First-Class function

- function 可以指派給變數，然後直接從該變數調用 function
- function 也可以當作參數，傳入另一個 function

## Example

- 沒參數的寫法

```go
package main

import "fmt"

func main() {
	// 把 function 存在變數裡，兩種宣告方法
	var t1 func() = test1
	t2 := test2

	f(t1)
	f(t2)
}

// 把 function (沒參數) 當作變數傳入
func f(a func()) {
	a()
}
func test1() {
	fmt.Println("test1")
}
func test2() {
	fmt.Println("test2")
}
```

- 有參數的寫法

```go
package main

import "fmt"

func main() {
	// 把 function 存在變數裡，兩種宣告方法
	var t1 func(int, int) int = add
	t2 := subtract

	fmt.Println(calculator(t1, 1, 2))
	fmt.Println(calculator(add, 1, 2)) // 當然也可以直接這樣寫，同上

	fmt.Println(calculator(t2, 8, 7))
}

// 把 function (有參數) 當作變數傳入
func calculator(f func(int, int) int, x int, y int) int {
	return f(x, y)
}
func add(x int, y int) int {
	return x + y
}
func subtract(x int, y int) int {
	return x - y
}
```

```go
package main

import (
	"fmt"
	"reflect"
)

// 底層是 func(int, int) int，但實際上型別是 Test，兩者為不同型別
type Test func(int, int) int

// 型別別名宣告，型別為 func(int, int) int
// 如果只是要縮短名稱可以這樣用
type Test2 = func(int, int) int

func main() {
	maximum := max
	fmt.Println(maximum(3, 5))
	fmt.Println(reflect.TypeOf(max))     // func(int, int) int
	fmt.Println(reflect.TypeOf(maximum)) // func(int, int) int
	fmt.Println(&maximum)                // 既然是變數，當然可以取 pointer

	var t Test
	var t2 Test2
	fmt.Println(reflect.TypeOf(t))  // main.Test
	fmt.Println(reflect.TypeOf(t2)) // func(int, int) int
}

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}
```

## 利用 first-class function 來重構

原本只是很單純要 `濾出 > 5 的數字`

```go
package main

import "fmt"

func main() {
	numbers := []int{1, 2, 4, 5, 6, 7, 8}
	result := filter(numbers)
	fmt.Println(result)
}

// 濾出 > 5 的數字
func filter(numbers []int) []int {
	var result []int
	for _, number := range numbers {
		if number > 5 {
			result = append(result, number)
		}
	}
	return result
}
```

有一天可能又追加一個需求，要 `濾出 < 5 的數字`

我們可能直接複製貼上，改個 function 名稱，裡面判斷邏輯改一下，交差完工

```go
func filterSmallerThan5(numbers []int) []int {
	var result []int
	for _, number := range numbers {
		if number < 5 {
			result = append(result, number)
		}
	}
	return result
}
```

But，這樣會有個問題，重複的 code 太多惹，需要好好重構

我們最終的目標就是：

讓 `number > 5` 變成不用寫死在裡面，能從外部去控制

```go
if number > 5 {
	result = append(result, number)
}
```

因此有了這個版本：

讓 `filter` 方法 可以傳入 `filterFunc func(int) bool`

可以有彈性的去定義過濾的方法

```go
package main

import "fmt"

func main() {
	numbers := []int{1, 2, 4, 5, 6, 7, 8}
	result := filter(numbers, BiggerThan5)
	fmt.Println(result)
}

func filter(numbers []int, filterFunc func(int) bool) []int {
	var result []int
	for _, number := range numbers {
		if filterFunc(number) {
			result = append(result, number)
		}
	}
	return result
}

func BiggerThan5(value int) bool {
	return value > 5
}

func SmallerThan5(value int) bool {
	return value < 5
}
```

這樣哪天 PM 說要 `濾出 2 ~ 4 之間` 的就可以加上這個 func

```go
func PMSayBetween2to4(value int) bool {
	return value >= 2 && value <= 4
}
```

最後，又覺得參數 `filterFunc func(int) bool` 後面的 `func(int) bool` 有點太冗長

因此可以再做點調整：`type FilterFunc = func(int) bool`

代表 `FilterFunc` 這個型別就是 `func(int) bool`

最終版：

```go
package main

import "fmt"

func main() {
	numbers := []int{1, 2, 4, 5, 6, 7, 8}
	result := filter(numbers, BiggerThan5)
	result2 := filter(numbers, PMSayBetween2to4)
	fmt.Println(result)
	fmt.Println(result2)
}

func filter(numbers []int, filterFunc FilterFunc) []int {
	var result []int
	for _, number := range numbers {
		if filterFunc(number) {
			result = append(result, number)
		}
	}
	return result
}

// 型別別名宣告
type FilterFunc = func(int) bool

func BiggerThan5(value int) bool {
	return value > 5
}

func SmallerThan5(value int) bool {
	return value < 5
}

func PMSayBetween2to4(value int) bool {
	return value >= 2 && value <= 4
}
```