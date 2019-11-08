#!/usr/bin/env node

const getBooks = require('../lib/apiCommands')
const { displayResults, welcome, getSearchTerm, menuOptions, menuSelection } = require('../lib/userInterface')

let searchResults = []
let userReadingList = []

const updateSearchResults = (newBooks) => {
	searchResults = newBooks
	displayResults(searchResults)
}

const app = async () => {
	let step = 'start'
	let searchTerm = ''
	while (step !== 'exit') {
		if (step === 'start') {
			welcome()
			step = 'search'
		} else if (step === 'search') {
			searchTerm = getSearchTerm()
			console.log(`Searching for "${searchTerm}". . .`)
			const books = await getBooks(searchTerm)
			updateSearchResults(books)
			step = 'submit'
		} else if (step === 'submit' && resultsDisplayed) {
			step = menuSelection()
		} else if (parseInt(step) >= 1 && parseInt(step) <= 5) {
			console.log(`you selected ${step}`)
			step = 'exit'
		}
	}
}

app()
