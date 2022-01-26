# 如何寫 Benchmark

偶然之下，今天被迫學習 Golang 的 benchmark 怎麼寫XD，馬上記錄下來

## Rule

- 建立 `xxx_test.go` 檔案 (先用 VS Code 建立測試檔案，再把不需要的刪掉)
- 方法開頭要有 `Benchmark`
- 傳入參數改成 `b *testing.B`
- 案例寫法

```go
for i := 0; i < b.N; i++ {
		// 要測試的方法
}
```

## Case

針對 main.go 裡面的三個方法做 benchmark

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {

}

func IntToString_1(num int) string {
	return fmt.Sprintf("%d", num)
}

func IntToString_2(num int64) string {
	return strconv.FormatInt(num, 10)
}
func IntToString_3(num int) string {
	return strconv.Itoa(num)
}
```

*main_test.go*

```go
package main

import (
	"testing"
)

func BenchmarkIntToString_1(b *testing.B) {
	for i := 0; i < b.N; i++ {
		IntToString_1(100)
	}
}

func BenchmarkIntToString_2(b *testing.B) {
	for i := 0; i < b.N; i++ {
		IntToString_2(100)
	}
}

func BenchmarkIntToString_3(b *testing.B) {
	for i := 0; i < b.N; i++ {
		IntToString_3(100)
	}
}
```

## 結果

```
goos: windows
goarch: amd64
pkg: practice_go
cpu: AMD Ryzen 5 3600 6-Core Processor              
BenchmarkIntToString_1-12    	13907173	    86.28 ns/op	       3 B/op	       1 allocs/op
BenchmarkIntToString_2-12    	47021758      25.45 ns/op	       3 B/op	       1 allocs/op
BenchmarkIntToString_3-12    	45960633	    25.77 ns/op	       3 B/op	       1 allocs/op
PASS
ok  	practice_go	3.787s
```

代表意思：

`-12`: CPU core

`13907173`: 每秒執行次數

`86.28 ns/op`: 每次多少 ns

`1 allocs/op`: 執行一次要分配幾個記憶體空間

`3 B/op:` 一個記憶體空間多少 Bytes

## 後記

不知道為什麼 command 不能用，目前是用 VS Code extension 上面顯示的 `run package benchmarks`、`run file benchmarks` 來執行

## Reference

[如何在 Go 語言內寫效能測試](https://blog.wu-boy.com/2018/06/how-to-write-benchmark-in-go/)