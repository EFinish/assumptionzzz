package main

import (
	"fmt"
	"log"
	"net/http"
	"encoding/json"

	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/database/mysql"
	_ "github.com/golang-migrate/migrate/v4/source/file"
)


func getStatementHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("API GET statement hit!")

	fmt.Fprint(w, "Potato")
}

func main() {
	m, err := migrate.New(
		"file://database/migrations",
		"mysql://ass:ass@localhost:430/example?sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
	if err := m.Up(); err != nil {
		log.Fatal(err)
	}

	http.HandleFunc("/v1/statement", getStatementHandler)

	fmt.Println("Listening on :425")
	log.Fatal(http.ListenAndServe(":425", nil))
}