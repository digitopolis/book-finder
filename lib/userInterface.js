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

module.exports = displayResults;
