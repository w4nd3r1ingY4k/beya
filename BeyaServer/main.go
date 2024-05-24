package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

type MyObj struct {
	Name   string `json:"name"`
	Number int    `json:"number"`
}

func main() {
	r := gin.Default()
	var x int = 0

	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"not a message":fmt.Sprintf("Hello, world! %d", x)})
		x++
	})

	r.POST("/echo", func(c *gin.Context) {
		var obj MyObj
		if err := c.ShouldBindJSON(&obj); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, obj)
	})

	fmt.Println("Server is running at http://127.0.0.1:8080")
	r.Run(":8080") // localhost 8080
}