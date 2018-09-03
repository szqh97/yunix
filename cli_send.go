package main

import (
	"fmt"
	"log"
)

func (cli *CLI) send(from, to string, amount int) {
	if !ValidateAddress(from) {
		log.Panic("ERRORS: Sender address is not valid")
	}
	if !ValidateAddress(to) {
		log.Panic("ERRORS: Recipient address is not valid")
	}

	bc := NewBlockchain(from)
	defer bc.db.Close()

	tx := NewUTXOTransaction(from, to, amount, bc)

	bc.MineBlock([]*Transaction{tx})
	fmt.Println("Success!")

}
