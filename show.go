package main

import (
	"fmt"
	"net/http"

	"gorm.io/gorm"
)

type show struct {
	gorm.Model
	Title                 string
	Description           string
	Status                string
	NextEpisode24HourTime string
	Timezone              string
	NextEpisodeDayOfWeek  []string
	Network               string
	ImageSmall            string
	ImageLarge            struct{}
}

func (s *server) handleUserShows() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case "GET":
			query := r.URL.Query()
			if id := query.Get("id"); id != "" {
				// then we are getting all
			}
		case "POST":
		case "PUT":
			query := r.URL.Query()
			id := query.Get("id")
			fmt.Println(id)
		case "DELETE":
			query := r.URL.Query()
			id := query.Get("id")
			fmt.Println(id)
		default:
			// method not implemented
			s.user.shows
			s.respond(w, r, "Method not allowed", http.StatusMethodNotAllowed)
		}
	}
}
