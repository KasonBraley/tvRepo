package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"gorm.io/gorm"
)

type server struct {
	db     *gorm.DB
	router *http.ServeMux
	user   *user
}

func newServer(db *gorm.DB) *server {
	srv := &server{
		db:     db,
		router: http.NewServeMux(),
	}
	srv.routes()
	return srv
}

func (s *server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.router.ServeHTTP(w, r)
}

// respond is a helper function for responding to http requests.
func (s *server) respond(w http.ResponseWriter, r *http.Request, data interface{}, status int) {
	w.WriteHeader(status)
	if data != nil {
		err := json.NewEncoder(w).Encode(data)
		if err != nil {
			fmt.Println("error in respond")
			// TODO: Handle err
		}
	}
}
