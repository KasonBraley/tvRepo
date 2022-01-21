package controllers

import (
	"bytes"
	"fmt"
	"io"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

const TvMazeEndpointUri = "https://api.tvmaze.com/search/shows?q="

// GET /books
// Get all books
func FindShows(c *gin.Context) {
	name := c.Query("name")

	data := getData(TvMazeEndpointUri + name)

	reader := bytes.NewReader(data)

	// var shows []models.Show
	// database.DB.Find(&shows)
	// buf := make([]byte, 16)
	n, err := reader.Read(data)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(n)

	// fmt.Println(string(data))
	// fmt.Println(data)

	c.JSON(http.StatusOK, gin.H{"data": string(data)})
	// c.String(http.StatusOK, "Hello %s ", name)
}

// func (s *Show) search() {
// 	// Read
// 	var Show Show
// 	db.First(&Show, 1)                 // find Show with integer primary key
// 	db.First(&Show, "code = ?", "D42") // find Show with code D42
//
// }

func getData(url string) []byte {
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("Response status:", resp.Status)

	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
	}

	return body
}
