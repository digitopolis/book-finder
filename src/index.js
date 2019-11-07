#!/usr/bin/env node

const getBooks = require('../lib/apiCommands')

console.log('find a book!');
console.log(getBooks('cats'));
