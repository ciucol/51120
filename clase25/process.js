const { Command } = require('commander')

const program = new Command()

program
  .option('-d', 'Variable para debug', false)
  .option('-p <port>', 'Puerto del servidor', 3000)
  .option('--mode <mode>', 'Modo de trabajo', 'production')
  .requiredOption(
    '-u <user>',
    'Usuario utilizando el aplicativo',
    'No se ha declarado un usuario'
  )
  .option('-l, --letters [letters...]', 'specify letters')

program.parse()

console.log('Options', program.opts().p)
console.log('Remaining arguments', program.args)
