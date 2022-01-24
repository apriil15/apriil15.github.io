# interface

- interface、struct 寫法
- interface{} 空介面是什麼
- type assertion 型別斷言怎麼用

## 經典的 Shape

- 定義一個 interface: shape
兩個 struct 實現: rectangle, circle

```go
package main

import (
    "fmt"
    "math"
)

func main() {
    r := rectangle{width: 5, height: 8, totalInnerAngle: 360}
    c := circle{radius: 6}

    Calculate(r)
    Calculate(c)
}

func Calculate(s shape) {
    fmt.Println("area:", s.area())
    fmt.Println("perimeter:", s.perimeter())

    // 因為 rectangle 才有 getTotalInnerAngle()，因此要 type assertion
    if r, ok := s.(rectangle); ok {
        fmt.Println("total inner angle:", r.getTotalInnerAngle())
    }
}

// 以下為 interface and struct
type shape interface {
    area() float32
    perimeter() float32
}

type rectangle struct {
    width, height   float32
    totalInnerAngle int
}

type circle struct {
    radius float32
}

// 多了這個方法
func (r rectangle) getTotalInnerAngle() int {
    return r.totalInnerAngle
}

func (r rectangle) area() float32 {
    return r.height * r.width
}

func (r rectangle) perimeter() float32 {
    return (r.height + r.width) * 2
}

func (c circle) area() float32 {
    return c.radius * c.radius * math.Pi
}

func (c circle) perimeter() float32 {
    return 2 * c.radius * math.Pi
}

```

## interface{}

- `interface{}`：可以代表任何型別
- type assertion: `轉型`的概念

```go
package main

import (
    "fmt"
)

func main() {
    // type assertion 可以 return 兩個值
    // 第一個：轉完型別的值
    // 第二個：有沒有成功轉過去
    var i interface{} = "string"
    s, ok := i.(string) // type assertion
    fmt.Println(s, ok)  // string true

    // 可以寫成 switch
    // %T: type 的意思
    var something interface{} = true
    switch result := something.(type) {
    case string:
        fmt.Printf("%T\n", result)
    case int:
        fmt.Printf("%T\n", result)
    case bool:
        fmt.Printf("%T\n", result) // bool
    default:
        fmt.Println("none of above")
    }
}
```

## Stringer

- 可以自己客製化印出東西

```go
package main

import "fmt"

func main() {

	t := Test(1.23456)

	// 本來會印出 1.23456 -> 變成 1.23
	fmt.Println(t)
}

type Test float64

// 實現 Stringer 介面
// 可以自己客製化印出的東西
func (t Test) String() string {
	return fmt.Sprintf("%0.2f", t)
}
```