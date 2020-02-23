

const agregar_pregunta = document.getElementById('agregar_pregunta')
agregar_pregunta.addEventListener('click', agregar)
const enviar = document.getElementById('finalizar')
enviar.addEventListener('click',finalizar)
function agregar() {
    const div = document.createElement('div');
    const pregunta = (
`<div class="row cuestionario pregunta">
  <div class="card tarjeta mt-2">
      <div class="card-body ">
          <form>
              <div class="form-row mb-2">
                  <div class="col-8">
                      <input type="text" class="form-control preguntaText" 
                          aria-describedby="emailHelp" placeholder="Pregunta">
                  </div>
                  <div class="col-4 ">
                      <select id="inputState" class="form-control">
                          <option selected>Verdadero/falso</option>
                          <option>opcion multiple</option>
                      </select>
                  </div>
              </div>
              <div class="form-row mb-2">
                <h5>Respuesta</h5>
              </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                    <label class="form-check-label" for="exampleRadios1">
                        Verdadero
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                    <label class="form-check-label" for="exampleRadios2">
                        Falso
                    </label>
                </div>
              
              <button type="button" class="btn btn-primary mt-2">Agregar Pregunta</button>
          </form>
      </div>
  </div>
</div>`);
    div.innerHTML = pregunta;
    preg = div.getElementsByClassName('cuestionario')[0];
    boton = preg.getElementsByTagName('button')[0];
    boton.addEventListener('click',agregar)
    cuestionario = document.getElementById('cuestionario');
    //console.log(cuestionario);
    cuestionario.appendChild(preg);

}

function finalizar(){
    window.location.href = "invitar.html";
}
/*
function finalizar(){
    const cuestionario = document.getElementById('cuestionario');
    preguntas = cuestionario.getElementsByClassName('pregunta');
    for(let i = 0; i<preguntas.length;i++){
        texto = preguntas[i].getElementsByClassName("preguntaText")
        console.log(texto[0].value)
        texto[0] = "hola"
        console.log(preguntas[i])
    }
}*/
var comfyText = (function () {
    var tag = document.querySelectorAll('textarea')
    for (var i = 0; i < tag.length; i++) {
        tag[i].addEventListener('paste', autoExpand)
        tag[i].addEventListener('input', autoExpand)
        tag[i].addEventListener('keyup', autoExpand)
    }
    function autoExpand(e, el) {
        var el = el || e.target
        el.style.height = 'inherit'
        el.style.height = el.scrollHeight + 'px'
    }
    window.addEventListener('load', expandAll)
    window.addEventListener('resize', expandAll)
    function expandAll() {
        var tag = document.querySelectorAll('textarea')
        for (var i = 0; i < tag.length; i++) {
            //autoExpand(e.tag[i])
        }
    }
})()

