# Operator 運算子

## << and >> shift operator

### Concept

- `x << y` → `x times 2, y times` (x 乘以 2，五次)
- `x >> y` → `x divided by 2, y times` (x 除以 2，五次)

### Example

```go
package main

import "fmt"

func main() {
	fmt.Println(1 << 5)  // 32
	fmt.Println(32 >> 5) // 1
}
```

## AND / OR 位元運算子

### Concept

位元運算子：bitwise operator

`AND`: 同位去比較，如果都是 1，才會是 1

`OR`: 同位去比較，有一個是 1，就會是 1

### Example

```go
package main

import "fmt"

func main() {

	// 基本的二進位
	fmt.Printf("%02b\n", 2) // 10
	fmt.Printf("%02b\n", 1) // 01

	// AND OR 位元運算子
	fmt.Printf("%02b\n", 2&1) // 00
	fmt.Printf("%02b\n", 2|1) // 11
}
```