const empleados = [
  {
    id: 1,
    nombre: "Roberto",
  },
  {
    id: 2,
    nombre: "Marta",
  },
  {
    id: 3,
    nombre: "Raul",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1500,
  },
  {
    id: 2,
    salario: 3000,
  },
];

const getEmpleadoById = async (id) => {
  try {
      const empleado = empleados.find((e) => e.id ===id );
    if (empleado) {
      return empleado;
    }
    throw new Error(`El empleado con id ${id}`)
  } catch (error) {
    throw error;
  }
};

const getSueldoById =  async (id) => {
  try {
      const salario = salarios.find((s) => s.id ===id);
    if (salario) {
        return (salario);;
      }
      throw new Error(`El empleado con id ${id} no tiene salario`)

    } catch (err) {
        throw new Error(`El empleado no persive salario`);
      
  } 
};

const id = 2;

const getDatosCompletosEmpleados = async (id) => {
    try {
        const emplead = await getEmpleadoById(id);
        const sueldo  = await getSueldoById(id);
        // console.log(`El empleado con id ${id}  es  ${emplead.nombre} y tiene un sueldo de ${sueldo.salario}`);
        return `El empleado con id ${id}  es  ${emplead.nombre} y tiene un sueldo de ${sueldo.salario}`;
        
    } catch (err) {
         throw err;
        // console.log(`hay un error`);
    }
}


getDatosCompletosEmpleados(id)
.then(mensaje => {console.log(mensaje)})
.catch(err => console.log(err.mensaje));
