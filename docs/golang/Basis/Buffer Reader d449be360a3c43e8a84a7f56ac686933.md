# Buffer Reader

```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {

	fmt.Print("input something: ")

	// os.Stdin: 標準輸入
	reader := bufio.NewReader(os.Stdin)

	// \n: 除了換行都會被讀取，因此按下 enter 就會結束
	result, _ := reader.ReadString('\n')

	fmt.Println("your input:", result)

}
```