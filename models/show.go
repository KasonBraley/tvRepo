package models

import "gorm.io/gorm"

type Show struct {
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
