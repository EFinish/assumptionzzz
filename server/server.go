package main

import (
	"fmt"
	"log"
	"io/ioutil"
	"net/http"
	"encoding/json"
)

type Statement struct {
	Id	int
	Description string
	Truth_value bool
	// referents
	Valid_value bool
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

func rootHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("index hit!")
	w.Header().Set("Content-Type", "text/html")
	w.WriteHeader(http.StatusOK)
	data, err := ioutil.ReadFile("./index.html")
	if err != nil {
		panic(err)
	}
	w.Header().Set("Content-Length", fmt.Sprint(len(data)))
	fmt.Fprint(w, string(data))
}

func main() {
	http.HandleFunc("/", rootHandler)

	http.HandleFunc("/v1/statement", getStatementHandler)

	fmt.Println("Listening on :420")
	log.Fatal(http.ListenAndServe(":420", nil))
}