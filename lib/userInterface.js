const readlineSync = require('readline-sync')

let searchTerm = ''

const welcome = () => {
	console.log('Welcome to Book Finder!')
	console.log('To get started, please enter a search term.')
	console.log('')
}

const getSearchTerm = () => {
	const searchTerm = readlineSync.question('Search: ')
	return searchTerm
}

const displayResults = (results) => {
	results.map((book, i) => {
		const author = book.author ? book.author.join(', ') : 'unknown author'
		const publisher = book.publisher ? book.publisher : 'unknown publisher'
		console.log(`${i+1}. "${book.title}"`)
		console.log(`   by ${author}`)
		console.log(`   Published by ${publisher}`)
		console.log('')
	})
}

const menuOptions = () => {
	console.log('Enter a number to save the book to your reading list')
	console.log('Or enter [s] to do a new search, or [l] to view your list')
	console.log('Enter [e] to exit')
}

const menuSelection = () => {
	const selection = readlineSync.question('?')
	if (selection === 'e') {
		return 'exit'
	} else if (selection === 's') {
		return 'search'
	} else if (selection === 'l') {
		return 'list'
	} else if (parseInt(selection) >= 1 && parseInt(selection) <= 5) {
		return selection
	} else {
		menuSelection()
	}
}


module.exports = {
	displayResults,
	welcome,
	getSearchTerm,
	menuOptions,
	menuSelection
}
