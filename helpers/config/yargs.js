const argv = require('yargs')
        .option('l',{
                alias:'listar',
                type:'boolean',                
                default:false,
                demandOption:true,
                describe:'Muestra la tabla en pantalla'
        })
        .option('h',{
                alias:'hasta',
                type:'number',                
                default:10,
                demandOption:10,
                describe:'Maximo multiplicador'
        })
        .option('b', {
                alias:'base',
                type: 'number',
                demandOption:true,
                describe:'La base de la tabla de multiplicar'
}).check((argv,options) =>{
     if(isNaN(argv.b)) {
         throw 'La base tiene que se un numero';
     }
     return true;
    
})
.argv;

module.exports= argv;