# Error Handling

## Error

- 原生 package errors

```go
package main

import (
	"errors"
	"fmt"
)

func main() {
	err := errors.New("hi, i am error")

	fmt.Println(err.Error())
	fmt.Println(err) // 可以直接這樣用，fmt 會判斷有沒有 Error() 這個方法
}
```

- 寫一個客製化 Error struct
重點為要實現 **error** 這個 interface

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    statusCode, myError := request(time.Now(), "i am params")
    fmt.Println(statusCode)
    fmt.Println(myError)
}

func request(requestTime time.Time, params string) (int, error) {
    return 404, &myError{requestTime, params}
}

// 客製化 Error struct
type myError struct {
    requestTime time.Time
    params      string
}

// 要實現 Error() 這個方法
func (myError *myError) Error() string {
    return "request time: " + myError.requestTime.Format("20060102150405") + "\n" +
        "params: " + myError.params
}
```

- source code
只要實現 Error() string 就是 error 惹

![https://i.imgur.com/3zAOBmy.png](https://i.imgur.com/3zAOBmy.png)

## Panic

- panic 就是一種射後不理，直接 crash

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    // 沒這個檔案
    _, err := os.Create("/tmp/file")

    if err != nil {
        panic(err) // crash
    }

    fmt.Println("不會印出來!")
}

```