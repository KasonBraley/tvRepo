package routes

import (
	"github.com/KasonBraley/tvRepo/controllers"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()
	r.GET("/", rootHandler)
	r.GET("/shows/search", controllers.FindShows)
	r.GET("/shows/:userId", controllers.GetUserShows)
	r.PUT("/shows/:userId", controllers.UpdateUserShows)
	r.POST("/user/login", controllers.Login)
	r.POST("/user/logout", controllers.Logout)

	return r
}

func rootHandler(c *gin.Context) {
	c.String(200, "These are not the bugs you are looking for")
}
