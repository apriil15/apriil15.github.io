---
slug: 2024-review
title: 2024 review
authors: apriil15
tags: [review]
---

年更！

照慣例稍微紀錄 2024

<!--truncate-->

## 工作 🛠️

好像沒啥好紀錄的欸？

以下流水帳 + murmur

--

延續 2023 Q4 開始做的系統架構與優化，順利做完然後上線

有趣指數：⭐⭐⭐⭐⭐

--

公司併購另一間公司 (以下簡稱 E，有一說是合併) 然後要做系統整合，把一些功能搬到我們系統

期間就會有一些過渡期要做的事，不難但很煩

比如說在我們系統成立一筆新訂單後，要特別 call API 同步資料到 E 公司系統

就要常常處理不可控的問題 (timeout 等等) 造成的 alert

所以 12 月初，結束過渡期後，可以把同步的功能砍掉讓我蠻開心的，總算不用再處理這類雜事

有趣指數：⭐⭐☆ ☆ ☆

--

幫忙優化 CICD，做了一點自動化的東東

有趣指數：⭐⭐⭐⭐⭐

--

串接 [Reserve with Google](https://developers.google.com/actions-center) 的一些功能

有趣指數：⭐⭐⭐☆ ☆

--

剩下就是一些雜七雜八的需求

## 學習 ✍🏻

今年主要把時間花在學習資料結構、演算法，搭配 [LeetCode](https://leetcode.com/)

學習資源是用：

- https://neetcode.io
- https://www.techinterviewhandbook.org

--

成果大概如下 [(LeetCode 回顧)](https://leetcode.com/rewind/2024/?source=apriil15&utm_source=rewind_24_share)

![熱力圖](image-1.png)

自認還算持之以恆 (?!)，整年大約寫了一百二十幾題 (easy, medium 比例為 1:2)

總結來說，我的方法是把寫過的題目，隔段時間再寫一次。第一次可能不會寫，第二次乃至第三次就有辦法自己寫出來

這部分在第二輪重寫 Tree 的相關題目很有感

然後總算學到一些一直以來沒弄懂的演算法，比如說 preorder, inorder, postorder 到底是怎麼去 traverse 一顆樹

--

說實話，工作上基本上用不到 (可能工作沒用到這麼難的東西吧)

用得上的主要是一些小東西的寫法，會知道怎樣寫比較精簡，哪些寫法是不必要的

比如說下面範例，code review 看到時，會直覺知道哪裡可省略 (~~一個肌肉記憶的概念~~)

```go
func main() {
	m := make(map[int][]int)

    // redundant check
	if _, ok := m[1]; !ok {
		m[1] = []int{}
	}

	m[1] = append(m[1], 1)

	fmt.Println(m[1])
}
```

## 運動 💪

COVID 期間開始沒在運動

拖延症了好久，九月十月重新開始運動

要持續下去！

## 旅遊 ✈️

### 4 月 (韓國-釜山)

第一次獨旅

![alt text](10900.jpg)

### 12 月 (日本-東京)

跟家人去ㄉ

附上美美的富士山，超幸運天氣很好無雲

![alt text](10901.jpg)

--

回程被 "搭飛機" 環遊世界一圈的兩個老外搭訕

深刻體會到自己英文口說還是不太行阿

## 2025 🚀

Plan:

- leetcode
- 看完 [OS](https://www.udemy.com/course/fundamentals-of-operating-systems/?couponCode=KEEPLEARNING) 課程
- 學剪影片
- 開始準備面試 (?!)

--

That's it, see you in 2025. 😇
