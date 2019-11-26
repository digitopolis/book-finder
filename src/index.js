#!/usr/bin/env node

const getBooks = require('../lib/apiCommands')
const { displayResults, welcome, getSearchTerm, menuOptions, menuSelection, displayMessage } = require('../lib/userInterface')

let searchResults = []
let userReadingList = []
let resultsDisplayed = false

const updateSearchResults = (newBooks) => {
	searchResults = newBooks
	displayResults(searchResults)
	displayMessage('Results Displayed')
	menuOptions()
	resultsDisplayed = true
}

const addToReadingList = (book) => {
	userReadingList.push(book)
	console.log(`"${book.title}" added to your reading list`)
}

const showReadingList = () => {
	if (userReadingList.length === 0) {
		console.log('Your reading list is empty!')
	} else {
		console.log('Your reading list:')
		displayResults(userReadingList)
	}
	menuOptions()
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
			displayMessage('Searching', searchTerm)
			const books = await getBooks(searchTerm)
			updateSearchResults(books)
			step = 'submit'
		} else if (step === 'submit' && resultsDisplayed) {
			step = menuSelection()
		} else if (parseInt(step) >= 1 && parseInt(step) <= 5) {
			console.log(`you selected ${step}`)
			addToReadingList(searchResults[parseInt(step) - 1])
			step = menuSelection()
		} else if (step === 'list') {
			showReadingList()
			step = menuSelection()
		}
	}
}

app()
