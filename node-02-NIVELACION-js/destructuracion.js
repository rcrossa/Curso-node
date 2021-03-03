const personaje ={
    nombre: 'Personaje 1',
    apellido: 'real',
    profesion: 'Informatico',
    getDescription(){
        return `${nombre} ${apellido} es ${profesion}`
    }

}
// const nombre = personaje.nombre;
// const apellido = personaje.apellido;
// const profesion = personaje.profesion; 

//aplicando destructuracion
// const {nombre,apellido,profesion} = personaje;


// console.log(nombre, apellido, profesion);
//aplicando destructuracion en una function
// const imprimirPersonaje = ({nombre,apellido,profesion}) =>{
//     console.log(nombre,apellido,profesion);
// }
// imprimirPersonaje(personaje);

const personajes = ['Pepe','Moni','Koki'];

const[p1,p2,p3] = personajes;

console.log(p1,p2,p3);