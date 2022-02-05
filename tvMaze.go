package main

import (
	"bytes"
	"fmt"
	"io"
	"log"
	"net/http"
)

const TvMazeEndpointUri = "https://api.tvmaze.com/search/shows?q="

// move to the frontend ?????

// findShows finds shows related to the passed in name query from the TvMaze API.
func (s *server) findShows() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		query := r.URL.Query()
		name := query.Get("name")

		data, err := getData(TvMazeEndpointUri + name)
		if err != nil {
			log.Println(err)
			s.respond(w, r, nil, http.StatusBadRequest)
		}

		reader := bytes.NewReader(data)

		// var shows []models.Show
		// database.DB.Find(&shows)
		// buf := make([]byte, 16)
		n, err := reader.Read(data)
		if err != nil {
			log.Println(err)
			s.respond(w, r, nil, http.StatusBadRequest)
		}
		fmt.Println(n)

		s.respond(w, r, data, http.StatusOK)
	}
}

func getData(url string) ([]byte, error) {
	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}

	fmt.Println("Response status:", resp.Status)

	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	return body, nil
}
