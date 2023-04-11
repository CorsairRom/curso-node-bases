const fs = require('fs');
var colors = require('colors');

const createFile = async (base = 8, l, h = 1)  => {

    try {
        
        let salida = '';
        let consola = '';
        for (let i = 1; i <=h; i++) {
            salida += `${base} x ${i} = ${base * i} \n`
            consola += `${base} ${colors.red('x')} ${i} ${'='.blue} ${base * i} \n`
        }
        if (l) {
            console.log('===============')
            console.log('Tabla del: ', base);
            console.log('===============')
            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
     
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

    

};

module.exports = {
    createFile
}
