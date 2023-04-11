
// const { boolean } = require('yargs');
const { createFile } = require('./helpers/multiply')
const argv = require('./config/yargs')


console.clear();
// console.log('===============')
// console.log('Tabla del: 5');
// console.log('===============')

// const base = 3;
// let salida = '';
// for (let i = 1; i <=10; i++) {
//     salida += `${base} x ${i} = ${base * i} \n`
// }
// console.log(salida);

// fs.writeFile( `tabla-${base}.txt`, salida, (err)=> {
//     if (err) throw err;

//     console.log('tabla-5.txt create');
// });

// const [,,arg3 = 'base=1' ] = process.argv;

// const [, base] = arg3.split('=');

// console.log(base);


// console.log( argv);

// console.log('base: yargs', argv.base);


createFile(argv.b, argv.l, argv.h)
    .then( file => console.log(file))
    .catch( err => console.log(err))

