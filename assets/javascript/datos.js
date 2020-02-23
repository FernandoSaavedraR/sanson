const email = document.getElementById('email');
const pass = document.getElementById('pass');
const name = document.getElementById('name');
const dir = document.getElementById('direc');
const city = document.getElementById('city');
const state = document.getElementById('state');
const pc = document.getElementById('inputZip');
const act = document.getElementById('act');
let contador = 0;
act.addEventListener('click', actualizar);

function actualizar() {
    if (contador === 0) {
        deshabilitar();
    } else {
        habilitar();
        cambiarDatos();
    }
};
function cambiarDatos() {
    datos = {
        "datos": {
            "email": email.value,
            "pass": pass.value,
            "name": name.value,
            "dir": dir.value,
            "city": city.value,
            "state": state.value,
            "zip": pc.value,
        }
    }
}
function deshabilitar() {
    pass.disabled = true;
    email.disabled = true;
    name.disabled = true;
    dir.disabled = true;
    city.disabled = true;
    state.disabled = true;
    pc.disabled = true;
    contador = 1;

};
function habilitar() {

    email.disabled = false;
    pass.disabled = false;
    name.disabled = false;
    dir.disabled = false;
    city.disabled = false;
    state.disabled = false;
    pc.disabled = false;
    contador = 0;
}
(async function leerJson() {
    data = await fetch('../data/user.json', {
    })
        .catch(() => { console.log('mal') })
    datos = await data.json().catch(() => console.log('error'))
    console.log(datos.datos)
    email.value = datos.datos.email;
    pass.value = datos.datos.pass;
    name.value = datos.datos.name;
    dir.value = datos.datos.dir;
    city.value = datos.datos.city;
    state.value = datos.datos.state;
    pc.value = datos.datos.zip;
})()
actualizar();