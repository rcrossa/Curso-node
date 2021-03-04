const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const { multiplicar } = require("./multiplicador");

console.log(argv._);

const base = 5;

// multiplicar(base);
