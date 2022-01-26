# 怎麼寫 MySQL

```go
package main

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	// connection
	db, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3306)/blog_service")
	check(err)
	defer db.Close()

	// query rows
	rows, err := db.Query("SELECT id FROM blog_service.blog_article")
	check(err)

	for rows.Next() {
		var id int
		err = rows.Scan(&id)
		check(err)
		fmt.Println(id)
	}
}

func check(err error) {
	if err != nil {
		panic(err)
	}
}
```