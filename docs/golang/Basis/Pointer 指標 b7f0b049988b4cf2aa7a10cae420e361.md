# Pointer 指標

- pointer: 儲存某一變數的 `memory address`
- `&`: 取出變數的 memory address
- `*`: 有兩種意思
    1. `*int` 代表型別為 int 的 pointer
    2. `variable` 代表 `dereference`，取得 point 指向的 memory address 的 value

```go
package main

import "fmt"

func main() {
    a := 87
    b := &a // b 的 value 為 a 的 memory address
    c := &b // c 的 value 為 b 的 memory address

    // 這兩個會一樣
    fmt.Println(&a) // 0xc000012088
    fmt.Println(b)  // 0xc000012088

    // dereference
    // b 儲存的是 a 的 memory address，因此取得 memory address 的值，也就是 87
    fmt.Println(*b)

    // 這兩個會一樣
    fmt.Println(&b) // 0xc000006028
    fmt.Println(c)  // 0xc000006028

    // c 儲存的是 b 的 memory address，因此取得 memory address 的值，其實就是 a 的 memory address
    fmt.Println(*c) // 0xc000012088
}
```

- 正常來說值不會改變，改成 pointer 就會改變惹

```go
package main

import "fmt"

func main() {
	number := 5

	becomeZero(&number)

	fmt.Println(number) // 0
}

// copy memory address
func becomeZero(number *int) {
	*number = 0 // dereference
}
```