#!/usr/bin/env node

const getBooks = require('../lib/apiCommands')
const { displayResults, welcome, getSearchTerm, menuOptions, menuSelection } = require('../lib/userInterface')

let searchResults = []
let userReadingList = []
let resultsDisplayed = false

const updateSearchResults = (newBooks) => {
	searchResults = newBooks
	displayResults(searchResults)
	console.log('Enter a number to save the book to your reading list')
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
		displayResults(userReadingList)
	}
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
			addToReadingList(searchResults[parseInt(step) - 1])
			step = menuSelection()
		} else if (step === 'list') {
			showReadingList()
			step = 'exit'
		}
	}
}

app()
