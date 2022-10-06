package models

import (
	"github.com/kyh0703/stock-community/models/ent"
)

func Connect() {
	// init database connection
	client, err := ent.Open("postgres", "localhost")
}
