# Unit Test

## Key Point

- file name: `xxx_test.go`
- function name: `TestXXX`
- function should pass: `*testing.T`

## Example

- `calculator.go`

```go
package modules

func Add(x int, y int) int {
	return x + y
}
```

- `calculator_test.go`

```go
package modules

import (
	"testing"
)

// 定義要測試的 data，以及預期的結果
type testData struct {
	numbers []int
	want    int
}

func TestAdd(t *testing.T) {
	// table driven test
	datas := []testData{
		{numbers: []int{1, 4}, want: 5},
		{numbers: []int{8, 7}, want: 15},
		// 可以再加測試案例...
	}

	for _, data := range datas {
		got := Add(data.numbers[0], data.numbers[1])
		if got != data.want {
			t.Errorf("want: %v, got: % v", data.want, got) // 格式化
		}
	}
}
```

## Hint

- VS code 輸入 `tdt` 會直接出現表格驅動測試（`table driven test`）的模板
- 目前看來直接`右鍵` → `新增單元測試`更為廣泛使用XD