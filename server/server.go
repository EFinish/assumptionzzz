package main

import (
	"fmt"
	"log"
	"net/http"
	"database/sql"

    _ "github.com/go-sql-driver/mysql"
)


func getStatementHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("API GET statement hit!")

	fmt.Fprint(w, "Potato")
}

func connectToDatabase() {
	fmt.Println("Connecting to ass-db...")

	db, err := sql.Open("mysql", "ass:ass@tcp(localhost:430)")

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	fmt.Println("Connected!")
}

func main() {
	connectToDatabase()

	http.HandleFunc("/v1/statement", getStatementHandler)

	fmt.Println("Listening on :425")
	log.Fatal(http.ListenAndServe(":425", nil))
}