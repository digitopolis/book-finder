
const fetch = require('node-fetch')

const googleBooksUrl = 'https://www.googleapis.com/books/v1/volumes?'
const gAPIKey = 'AIzaSyD-WPXglF-vrt1qt9xjAQ4-qVRmHpVhhiI'

// define number of results returned per search
const maxResults = 5

const getBooks = async (searchTerm) => {
	const results = await fetch(`${googleBooksUrl}q=${searchTerm}&maxResults=${maxResults}`).then(res => res.json())
	console.log(results.items);
}

module.exports = getBooks;
