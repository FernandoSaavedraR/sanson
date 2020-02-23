const tabla = document.getElementById('tabla')
const links = tabla.getElementsByTagName('a')

function eliminar(e){
    e.target.parentElement.parentElement.innerHTML=""
}

for(let i = 0; i< links.length;i++){
    links[i].addEventListener('click',eliminar)
}
