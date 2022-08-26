// carga inicial de datos
import data from './data.js'

const cargarDatos = () => {
    var datos = data
    localStorage.setItem('personas', JSON.stringify(data))
}

window.onload = cargarDatos()

// definición de variables y nodos 
var personas = JSON.parse(localStorage.getItem('personas'))
const tablaPersonas = document.getElementById('datos')
const boton = document.getElementById('boton')

// datos del formulario 
var name = document.getElementById('nombre')
var lastName = document.getElementById('apellido')
var age = document.getElementById('edad')
name.focus()


// funciones
const sortPersonas = () => {
    personas.sort((a, b) => {
        if(a.status < b.status){
            return -1
        }
        if(a.status > b.status){
            return 1
        }
        
        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
            return -1;
        }
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
            return 1;
        }
        return 0;
    }
    )
}
const listarPersonas = () => {
    sortPersonas()
    tablaPersonas.innerHTML = "";
    personas.forEach((persona, index) => {
        var li = document.createElement('li')
        var check = document.createElement('input')
        check.setAttribute('type', 'checkbox')
        li.appendChild(check)
        li.append(`ID: ${persona.id}  - ${persona.nombre} ${persona.apellido} - Edad: ${persona.edad} - ${persona.status}`)
        li.setAttribute('id', persona.id)
        li.setAttribute('class', persona.status)
        tablaPersonas.appendChild(li)
    })
}

const getDataFromForm = (e) => {
    e.preventDefault();
    let persona = {
        "nombre": name.value,
        "apellido": lastName.value,
        "edad": age.value,
        "status": "active"
    }
    personas.push(persona)

    // guardando en localstorage 
    localStorage.setItem('personas', JSON.stringify(personas))
    personas = JSON.parse(localStorage.getItem('personas'))

    listarPersonas()

    let form = document.getElementById('form')
    form.reset()
    name.focus()
}

// event listeners 
boton.addEventListener('click', getDataFromForm)
tablaPersonas.addEventListener('click', (e) => {
    if (e.target.nodeName == 'INPUT') {
        var id = e.target.parentNode.getAttribute('id')
        personas.forEach((persona)=>{
            if(persona.id == id){
                if(persona.status === "active"){
                    persona.status = "done"
                } else{
                    persona.status = "active"
                }
            }
            
        })
       listarPersonas()

    }
    // console.log(e.target.nodeName);

})

name.focus()
listarPersonas()

