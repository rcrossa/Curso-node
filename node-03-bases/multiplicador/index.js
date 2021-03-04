const fs = require("fs");
const { logica } = require("./logica");

const multiplicar = (base) => {
  console.log(`=======================`);
  console.log(`tabla del  ${base}`);
  console.log(`=======================`);

  const resultado = logica(base);

  console.log(resultado);
  const nombredearchivo = `tabla-del-${base}`;
  fs.writeFile(`tablas/${nombredearchivo}`, resultado, (err) =>{
      if (err) throw err ;
      console.log(`El archivo tabla-del-${nombredearchivo} fue creado.`);
  });
}

module.exports = {
  multiplicar,
};
