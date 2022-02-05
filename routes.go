package main

import (
	"net/http"
)

func (s *server) routes() {
	s.router.HandleFunc("/", s.handleIndex())
	s.router.HandleFunc("/show/search", s.findShows())

	s.router.HandleFunc("/show", s.handleUserShows())
	// /:id not supported in http package ; user query's instead
}

func (s *server) handleIndex() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		s.respond(w, r, "These are not the bugs you are looking for", http.StatusOK)
	}
}
