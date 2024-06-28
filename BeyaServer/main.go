package main

import (
    "fmt"
    "log"
    "github.com/gin-gonic/gin"
    "net/http"
    "net/smtp"
)

type MyObj struct {
    Name   string `json:"name"`
    Number int    `json:"number"`
}

type Feedback struct {
    Feedback string `json:"feedback"`
}

func sendEmail(feedback string) error {
    from := "beyafeedback@gmail.com"
    password := "lifeisg00d"
    to := "beyafeedback@gmail.com"
    smtpHost := "smtp.gmail.com"
    smtpPort := "587"

    msg := "From: " + from + "\n" +
        "To: " + to + "\n" +
        "Subject: Feedback from Beya App\n\n" +
        feedback

    auth := smtp.PlainAuth("", from, password, smtpHost)

    // Detailed logging for debugging
    log.Println("Attempting to send email...")
    log.Printf("SMTP Server: %s:%s\n", smtpHost, smtpPort)
    log.Printf("From: %s\n", from)
    log.Printf("To: %s\n", to)

    err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, []string{to}, []byte(msg))
    if err != nil {
        log.Printf("Error: %v\n", err)
        return err
    }
    log.Println("Email sent successfully!")
    return nil
}

func main() {
    r := gin.Default()
    var x int = 0

    r.GET("/", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{"not a message": fmt.Sprintf("Hello, world! %d", x)})
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

    r.POST("/send-feedback", func(c *gin.Context) {
        var feedback Feedback
        if err := c.ShouldBindJSON(&feedback); err != nil {
            c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
            return
        }
        if err := sendEmail(feedback.Feedback); err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
            return
        }
        c.JSON(http.StatusOK, gin.H{"message": "Feedback sent successfully!"})
    })

    fmt.Println("Server is running at http://127.0.0.1:8080")
    r.Run(":8080") // localhost 8080
}