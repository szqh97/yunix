package main

import (
	"bytes"
	"crypto/sha256"
	"strconv"
	"time"
)

type Block struct {
	TimeStamp     int64
	Data          []byte
	PrevBlockHash []byte
	Hash          []byte
	Nonce         int
}

func (b *Block) SetHash() {
	ts := []byte(strconv.FormatInt(b.TimeStamp, 10))
	h := bytes.Join([][]byte{b.PrevBlockHash, b.Data, ts}, []byte{})
	hash := sha256.Sum256(h)
	b.Hash = hash[:]
}
func NewBlock(data string, PrevBlockHash []byte) *Block {
	block := &Block{time.Now().Unix(), []byte(data), PrevBlockHash, []byte{}, 0}
	pow := NewProofOfWork(block)
	nonce, hash := pow.Run()
	block.Hash = hash[:]
	block.Nonce = nonce
	return block
}

func NewGenesisBlock() *Block {
	return NewBlock("Genesis Block", []byte{})
}
