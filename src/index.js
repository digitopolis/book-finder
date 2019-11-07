#!/usr/bin/env node

const getBooks = require('../lib/apiCommands')
const displayResults = require('../lib/userInterface')

let searchResults = []
let userReadingList = []

const updateSearchResults = (newBooks) => {
	searchResults = newBooks
	displayResults(searchResults)
}

console.log('find a book!');
getBooks('cats').then(updateSearchResults)
