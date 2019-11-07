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
