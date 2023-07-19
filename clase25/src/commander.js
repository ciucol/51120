const { Command } = require('commander')

const program = new Command()

program.option('--mode <mode>', 'Environment del servidor', 'local').parse()

process.env.NODE_ENV = program.opts().mode

module.exports = program
