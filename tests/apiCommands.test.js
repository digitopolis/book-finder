const { formatResponse } = require('../lib/apiCommands')

const mockResponse = {
	items: [
		{
			volumeInfo: {
				title: 'Slaughterhouse-Five',
				authors: 'Kurt Vonnegut',
				publisher: 'Delacorte'
			}
		}
	]
}

const formattedBook = {
	title: 'Slaughterhouse-Five',
	author: 'Kurt Vonnegut',
	publisher: 'Delacorte'
}

test('Formats response to book object', () => {
	expect(formatResponse(mockResponse)[0]).toMatchObject(formattedBook)
})
