package main

import (
    "log"
    "net/smtp"
)

func main() {
    from := "beyafeedback@gmail.com"
    password := "usymmyhhppfwxwpj"
    to := "akbar.shamjijr@gmail.com"
    smtpHost := "smtp.gmail.com"
    smtpPort := "587"

    msg := "From: " + from + "\n" +
        "To: " + to + "\n" +
        "Subject: Test Email from Go\n\n" +
        "This is a test email."

    auth := smtp.PlainAuth("", from, password, smtpHost)

    err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, []string{to}, []byte(msg))
    if err != nil {
        log.Fatalf("Error: %v\n", err)
    } else {
        log.Println("Email sent successfully!")
    }
}