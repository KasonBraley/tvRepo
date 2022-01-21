package models

type User struct {
	Email      string
	Password   string
	IsLoggedIn bool
	Shows      []Show
}
