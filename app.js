const { number, boolean } = require('yargs');
const {crearArchivo, crearArchivoAsync} = require('./helpers/multiplicar.js');
const argv = require('./helpers/config/yargs');


console.clear();

// console.log(process.argv);
// const [,,arg3= 'base=1'] = process.argv;
// console.log(arg3);
// const [,base =1]= arg3.split('=');
// console.log(base);






//  crearArchivoAsync(5)
//  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//  .catch(err => console.log(err));



console.log(process.argv);
console.log(argv);
console.log('base yargs', argv.base, argv.listar);

crearArchivo(argv.base, argv.listar,argv.hasta)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));