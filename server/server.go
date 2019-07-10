package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"encoding/json"

	// _ "github.com/go-sql-driver/mysql"
	// "database/sql"
)

type Statement struct {
	Id	int
	Description string
	Truth_value bool
	// referents
	Valid_value bool
}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("index hit!")
	w.Header().Set("Content-Type", "text/html")
	w.WriteHeader(http.StatusOK)
	data, err := ioutil.ReadFile("server/index.html")
	if err != nil {
		panic(err)
	}
	w.Header().Set("Content-Length", fmt.Sprint(len(data)))
	fmt.Fprint(w, string(data))
}

func clientBundleHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("bundle hit!")
  w.Header().Set("Content-Type", "text/javascript")
	w.WriteHeader(http.StatusOK)
	data, err := ioutil.ReadFile("build/client.js")
	if err != nil {
		panic(err)
	}
	w.Header().Set("Content-Length", fmt.Sprint(len(data)))
	fmt.Fprint(w, string(data))
}

func getStatementHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("API GET statement hit!")

	dataResponse := map[int]Statement{
		1: Statement{
			Id: 1,
			Description: "This ball is green",
			Truth_value: true,
			Valid_value: true,
		},
	}

	data, err := json.Marshal(dataResponse)
	if err != nil {
			panic(err)
		}

	fmt.Fprint(w, string(data))
}

func testHandler(w http.ResponseWriter, r *http.Request) {
	// cnn, err := sql.Open("mysql", "docker:docker@tcp(db:3306)/test_db")
    //     if err != nil {
    //             log.Fatal(err)
    //     }

    //     id := 1
    //     var name string

    //     if err := cnn.QueryRow("SELECT name FROM test_tb WHERE id = ? LIMIT 1", id).Scan(&name); err != nil {
    //             log.Fatal(err)
    //     }

    //     fmt.Println(id, name)
}

func main() {
  http.HandleFunc("/", rootHandler)
	http.HandleFunc("/client.js", clientBundleHandler)
	
	http.HandleFunc("/v1/statement", getStatementHandler)
	http.HandleFunc("/test", testHandler)

	fmt.Println("Listening on :420")

	log.Fatal(http.ListenAndServe(":420", nil))
}