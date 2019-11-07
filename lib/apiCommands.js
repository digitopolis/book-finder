
const fetch = require('node-fetch')

const googleBooksUrl = 'https://www.googleapis.com/books/v1/volumes?'
const gAPIKey = 'AIzaSyD-WPXglF-vrt1qt9xjAQ4-qVRmHpVhhiI'

// define number of results returned per search
const maxResults = 'maxResults=5'

const getBooks = async (searchTerm) => {
	const results = []
	const response = await fetch(`${googleBooksUrl}q=${searchTerm}&${maxResults}&printType=books`).then(res => res.json())
	response.items.map(item => {
		const book = {}
		book.title = item.volumeInfo.title
		book.author = item.volumeInfo.authors
		book.publisher = item.volumeInfo.publisher
		results.push(book)
	})
	return results
}

module.exports = getBooks;