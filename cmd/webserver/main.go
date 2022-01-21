package main

import (
	"github.com/KasonBraley/tvRepo/database"
	"github.com/KasonBraley/tvRepo/routes"
)

func main() {

	database.ConnectDatabase()

	r := routes.SetupRouter()
	r.Run(":5000")
}
