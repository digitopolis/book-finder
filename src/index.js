#!/usr/bin/env node

const getBooks = require('../lib/apiCommands')
let searchResults = []

const updateSearchResults = (newBooks) => {
	searchResults = newBooks
	console.log(searchResults);
}

console.log('find a book!');
getBooks('cats').then(updateSearchResults)
