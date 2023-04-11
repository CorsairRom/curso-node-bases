const argv = require('yargs')
                .options({
                    'b' : {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'This is the base for the multiplication table'
                    },
                    'l' : {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'This option shows the table'
                    },
                    'h' :{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        describe: 'This option is to limit the multiplication'
                    }
                })
                .check( (argv, options)=>{
                    console.log(argv.b)
                    if ( isNaN(argv.b)){
                        throw 'the base must be a number'
                    }
                    return true
                })
                .argv;

module.exports = argv;