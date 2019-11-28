const { welcome, displayResults } = require('../lib/userInterface')

global.console = {
	log: jest.fn()
}

const bookResults = [
	{
		title: 'Slaughterhouse-Five',
		authors: 'Kurt Vonnegut'
	},
	{
		title: 'Book with no author',
		publisher: 'Self'
	}
]

describe('Tests the welcome function', () => {
	it('should console log a welcome message', () => {
		welcome()
		expect(global.console.log).toHaveBeenCalledWith('Welcome to Book Finder!')
	})
})

describe('Testing displayResults', () => {
	beforeEach(() => {
		displayResults(bookResults)
	})
	it('Should display the title "Slaughterhouse-Five"', () => {
		expect(global.console.log).toHaveBeenCalledWith('1. "Slaughterhouse-Five"')
	})
	it('Should display "unknown author" when none present', () => {
		expect(global.console.log).toHaveBeenCalledWith('   by unknown author')
	})
	it('Should display "unknown publisher" when none present', () => {
		expect(global.console.log).toHaveBeenCalledWith('   Published by unknown publisher')
	})
})
