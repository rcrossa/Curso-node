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

const getEmpleadoById = (id, callback) => {
    const empleado = empleados.find( (e) => e.id === id);
    if (empleado) {
        callback(null, empleado);
        return;
    }
    callback(new Error(`El empleado con ${id} no existe`));
}

const getEmpleadoBySalario = (id , callback) => {
    const salario = salarios.find( (s) => s.id ===id);
    if (salario) {
        callback(null, salario);
        return;
    }
    callback(new Error(`No hay salario disponible para el id ${id}`));
}

const id = 3;

getEmpleadoById(id, (error, empleado) => {
    if (error) {
        console.log(`No hay ningun empleado con ${id}`);
        return;
    }
    console.log(`El empleado: ${empleado.nombre} ...`);

    getEmpleadoBySalario(id, (error, salario) => {
        if (error) {
            console.log('Este empleado no tiene informacion de salario .....');
            return;
        }
        console.log(`El salario del empleado es ${salario.salario}`);
    });
});

