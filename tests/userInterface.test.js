const { welcome } = require('../lib/userInterface')

global.console = {
	log: jest.fn()
}

describe('Tests the welcome function', function() {
	it('should console log a welcome message', function() {
		welcome()
		expect(global.console.log).toHaveBeenCalledWith('Welcome to Book Finder!')
	})
})
