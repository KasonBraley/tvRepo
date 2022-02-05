package main

import (
	"flag"
	"fmt"
	"net/http"
	"os"
)

func main() {
	var (
		serverHost = flag.String("serverHost", "", "HTTP server host name")
		serverPort = flag.Int("serverPort", 5000, "HTTP server network port")
	)
	flag.Parse()

	serverAddr := fmt.Sprintf("%s:%d", *serverHost, *serverPort)

	if err := run(serverAddr); err != nil {
		fmt.Fprintf(os.Stderr, "%s\n", err)
		os.Exit(1)
	}
}

func run(serverAddr string) error {
	db, err := connectDatabase()
	if err != nil {
		return err
	}

	srv := newServer(db)
	return http.ListenAndServe(serverAddr, srv)
}
