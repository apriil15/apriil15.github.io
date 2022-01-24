# function

## Anonymous

- without return
    
    ```go
    package main
    
    import (
    	"fmt"
    )
    
    func main() {
    	// normal
    	test(10)
    
    	// anonymous
    	func(number int) {
    		fmt.Println(number)
    	}(10)
    }
    
    func test(number int) {
    	fmt.Println(number)
    }
    ```
    
- with return
    
    ```go
    package main
    
    import (
    	"fmt"
    )
    
    func main() {
    	// normal
    	result := test(10)
    	fmt.Println(result)
    
    	// anonymous
    	result = func(num int) int {
    		return num
    	}(87)
    	fmt.Println(result)
    }
    
    func test(number int) int {
    	return number
    }
    ```