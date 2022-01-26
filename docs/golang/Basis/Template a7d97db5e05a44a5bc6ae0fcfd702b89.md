# Template

這也太神奇惹吧XD，印象中 Hugo (?!) 有看過這樣的寫法

## Remark

直接插入 data：`{{.}}`

struct 寫法，後面要加入欄位：`{{.field}}`

true 才會顯示中間的 data：`{{if .}}xxx{{end}}`

迴圈：`{{range .}}{{.}}{{end}}`

## Example

### Template

```go
package main

import (
	"log"
	"os"
	"text/template"
)

func main() {
	// {{.}}
	exeTemplate("i am not a {{.}} guy\n", "C#")
	exeTemplate("i am a {{.}} guy\n", "Go")

	// {{if .}}xxx{{end}}
	exeTemplate("{{if .}}i like Go{{end}}\n", true)
	exeTemplate("{{if .}}i like C#{{end}}\n", false)

	// {{range .}}{{.}}{{end}}
	exeTemplate("{{range .}}i am a {{.}} guy\n{{end}}\n", []string{"Go", "Java", "Python"})

	// {{.field}} struct 寫法
	exeTemplate("{{.Name}} language's salary is {{.Salary}}K.{{if .IsPopular}} Besides, it's very popular.{{end}}\n",
		Language{Name: "Go", Salary: 121, IsPopular: true})
}

func exeTemplate(text string, data interface{}) {
	tmpl, err := template.New("test").Parse(text)
	check(err)
	err = tmpl.Execute(os.Stdout, data) // Stdout (standard output) -> terminal
	check(err)
}

func check(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

type Language struct {
	Name      string
	Salary    int
	IsPopular bool
}
```

### 簽到簿應用程式

- main.go

```go
package main

import (
	"bufio"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/guestbook", viewHandler)
	http.HandleFunc("/guestbook/new", newHandler)
	http.HandleFunc("/guestbook/create", createHandler)
	err := http.ListenAndServe(":8080", nil)
	log.Fatal(err)
}

func viewHandler(writer http.ResponseWriter, request *http.Request) {
	signatures := getSignatures("signatures.txt")
	tmpl, err := template.ParseFiles("view.html")
	check(err)

	guestBook := GuestBook{SignatureCount: len(signatures), Signatures: signatures}
	err = tmpl.Execute(writer, guestBook)
	check(err)
}

func newHandler(writer http.ResponseWriter, request *http.Request) {
	tmpl, err := template.ParseFiles("new.html")
	check(err)
	err = tmpl.Execute(writer, nil)
	check(err)
}

func createHandler(writer http.ResponseWriter, request *http.Request) {
	signature := request.FormValue("signature")

	// OR 位元運算子
	options := os.O_WRONLY | os.O_APPEND | os.O_CREATE

	file, err := os.OpenFile("signatures.txt", options, os.FileMode(0600))
	check(err)
	_, err = fmt.Fprintln(file, signature)
	check(err)
	err = file.Close()
	check(err)

	http.Redirect(writer, request, "/guestbook", http.StatusFound)
}

type GuestBook struct {
	SignatureCount int
	Signatures     []string
}

func getSignatures(fileName string) []string {
	var result []string

	file, err := os.Open(fileName)
	if os.IsNotExist(err) {
		return nil
	}
	check(err)
	defer file.Close()
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		result = append(result, scanner.Text())
	}
	check(scanner.Err())
	return result
}

func check(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
```

- view.html

```html
<h1>Guestbook</h1>

<div>
  {{.SignatureCount}} total signature -
  <a href="/guestbook/new">Add Your Signature</a>
</div>

<div>
  {{range .Signatures}}
  <p>{{.}}</p>
  {{end}}
</div>
```

- new.html

```html
<h1>Add a Signature</h1>

<form action="/guestbook/create" method="post">
  <div><input type="text" name="signature" id="" /></div>
  <div><input type="submit" /></div>
</form>
```