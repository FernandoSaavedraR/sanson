const email = document.getElementById('email');
const pass = document.getElementById('pass');
const name = document.getElementById('name');
const dir = document.getElementById('direc');
const city = document.getElementById('city');
const state = document.getElementById('state');
const pc = document.getElementById('inputZip');
const act = document.getElementById('act');
let contador = 0;
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

act.addEventListener('click',()=>{
    window.location.href = "../animacion.html";
})