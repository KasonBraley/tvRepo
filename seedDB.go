package main

import (
	"fmt"

	"gorm.io/gorm"
)

func SeedDb() {
	db, err := connectDatabase()
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&show{})

	// Create
	for i := 0; i < 5; i++ {
		db.Create(&show{
			Model:                 gorm.Model{},
			Title:                 fmt.Sprintf("Title #%d", i),
			Description:           fmt.Sprintf("Description #%d", i),
			Status:                fmt.Sprintf("Running #%d", i),
			NextEpisode24HourTime: fmt.Sprintf("1%d:00 #%d", i, i),
			Timezone:              fmt.Sprintf("America/New York #%d", i),
			NextEpisodeDayOfWeek:  []string{"Sunday", "Monday"},
			Network:               fmt.Sprintf("Netflix #%d", i),
			ImageSmall:            fmt.Sprintf("Small Image #%d", i),
			ImageLarge:            struct{}{},
		})
	}

	// Read
	var show show
	db.First(&show, 1)                        // find Show with integer primary key
	db.First(&show, "title = ?", "Ted Lasso") // find Show with Title "Ted Lasso"

	// Update - update Show's price to 200
	db.Model(&show).Update("Status", "ended")
	// Update - update multiple fields
	// db.Model(&Show).Updates(&Show{Title: "foo", Description: "bar"}) // non-zero fields
	db.Model(&show).Updates(map[string]interface{}{"Title": "foo", "description": "bar"})

	// Delete - delete Show
	db.Delete(&show, 1)
}
