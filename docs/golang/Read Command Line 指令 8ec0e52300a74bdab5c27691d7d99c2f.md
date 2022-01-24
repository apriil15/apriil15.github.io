# Read Command From Command Line

其實很簡單 XD

不知道通常會怎麼應用，我猜 cobra 有用到

```go
package main

import (
	"fmt"
	"os"
)

func main() {

	// 會回傳我們從 command line 輸入的引數的 slice
	arr := os.Args

	fmt.Println(arr)

	// 第一個不需要，所以實務上把 index = 0 拿掉
	fmt.Println(arr[1:])
}
```

指令輸入 `go run main.go 1 2 3`

```powershell
PS D:\Projects\FirstGoProject> go run main.go 1 2 3
[C:\Users\user\AppData\Local\Temp\go-build1843040366\b001\exe\main.exe 1 2 3]
[1 2 3]
```
