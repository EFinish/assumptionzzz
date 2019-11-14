package main

import (
	"fmt"
	"log"
	"net/http"
	// "database/sql"

	"github.com/golang-migrate/migrate/v4"

	_ "github.com/go-sql-driver/mysql"
	_ "github.com/golang-migrate/migrate/v4/database/mysql"
	_ "github.com/golang-migrate/migrate/v4/source/file"
)


func getStatementHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("API GET statement hit!")

	fmt.Fprint(w, "Potato")
}

// func connectToDatabase() {
// 	fmt.Println("Connecting to ass-db...")

// 	db, err := sql.Open("mysql", "ass:ass@tcp(localhost:430)")

// 	if err != nil {
// 		panic(err.Error())
// 	}

// 	defer db.Close()

// 	fmt.Println("Connected!")
// }

func performMigrations() {
	m, err := migrate.New(
		"file://db/migrations",
		"mysql://ass:ass@localhost:430?sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
	if err := m.Up(); err != nil {
		log.Fatal(err)
	}
}

func main() {
	// connectToDatabase()
	performMigrations()

	http.HandleFunc("/v1/statement", getStatementHandler)

	fmt.Println("Listening on :425")
	log.Fatal(http.ListenAndServe(":425", nil))
}