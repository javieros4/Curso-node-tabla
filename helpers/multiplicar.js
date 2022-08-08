const fd = require('fs');
const { resolve } = require('path');
const colors = require('colors');
const crearArchivo =(base , listado = true, hasta = 10) => {
 
return new Promise((resolve,reject) => 
{
    let  salida , prinfFile='';
    for(let i=1; i<=hasta; i++)
    {
        salida += `${colors.blue(base)} ${'x'.red} ${colors.yellow(i)} = ${colors.green(base*i)} \n`;
        prinfFile += `${base} ${'x'} ${i} = ${base*i} \n`;
        
    }
    if (listado)
    {
        console.log('==========================='.brightYellow);
        console.log('    TABLA DEL:'.random,colors.cyan(base));
        console.log(colors.brightYellow('==========================='));
        console.log(salida);
    }
console.log();
  (!fd.writeFileSync(`./salida/tabla-${base}.txt`,prinfFile))
  ? resolve(`tabla-${base}.txt`)
  : reject('Archivo no creado')
    
    });

}


const crearArchivoAsync = async(base =1) => { 
    try
    {
        console.log('===========================')
        console.log('TABLA DEL:',base)
        console.log('===========================')
    
        let  salida ='';
        for(let i=1; i<=10; i++)
        {
            salida += `${base} x ${i} = ${base*i} \n`;
        }
    
        fd.writeFileSync(`tabla-${base}.txt`,salida);
        
        return(`tabla-${base}.txt`)
      
    }   
    catch(err)
    {
        throw err;
    }

        
}
module.exports = {
    crearArchivo,
    crearArchivoAsync
}

