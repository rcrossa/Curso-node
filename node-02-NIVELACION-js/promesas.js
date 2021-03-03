const empleados = [
    {
        id: 1,
        nombre: 'Roberto'
    },
    {
        id: 2,
        nombre: 'Marta'
    },
    {
        id: 3,
        nombre: 'Raul'
    }
]

const salarios = [
    {
        id: 1,
        salario: 1500
    },
    {
        id: 2,
        salario: 3000
    }
]



const getEmpleadoById = (id) => {
    
    return new Promise((resolve, reject) => {
        const empleado = empleados.find( (e) => e.id === id);

        if (empleado) {
            resolve(empleado);
            return;
        }
        reject(`El empleado con ${id} no existe`);
    });
}

const getSueldoById = (id) => {
    return new Promise((resolve,reject) => {
        const salario = salarios.find( (s) => s.id === id);
        if (salario) {
            resolve(salario);
            return;
        }
        reject (`El empleado ${id} no tiene salario`);
    })
}

const id = 3;
let empl;

getEmpleadoById(id).then(empleado => {
    empl = empleado.nombre;
    return getSueldoById(id);
}).then(salario => {
    console.log(`El salario del empleado ${empl} es ${salario.salario}.`);
}).catch(err => {console.log(err);});