const fs = require("fs");
const { logica } = require("./logica");

const multiplicar = (base, limite, visualizar) => {

  const colors = require('colors')
  const resultado = logica(base, limite);
  if(visualizar){  
            console.log(`=======================`.green);
            console.log(`tabla del  ${base}`.green);
            console.log(`=======================`.green);
            console.log(resultado.bgCyan);
          }




  const nombredearchivo = `tabla-del-${base}`;
  fs.writeFile(`tablas/${nombredearchivo}`, resultado, (err) =>{
      if (err) throw err ;
      console.log(`El archivo tabla-del-${nombredearchivo} fue creado.`.rainbow);
  });
}

module.exports = {
  multiplicar,
};
