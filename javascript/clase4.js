let elemento = document.getElementById("principal");
// btn.addEventListener('mouseover', inicio);
function inicio(){alert('Estamos llamando a la funcion')}

// document.addEventListener('load',carga());

// function carga(){
//     alert('estamos en el load')
// }


/*Usamos el evento load renderizamos el formulario con el inner*/
window.addEventListener('load',function(){
    elemento.innerHTML = `
    <form action="#">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="buttom" id="btn" class="btn btn-primary" onclick="entrar()">Entrar</button>
  </form>`
});

let usuario = {
    name:'Alejo Ponce',
    email:'alejo@gmail.com',
    pass:'123456',
    validar:(e,p)=>{
        if(e === usuario.email && p === usuario.pass){
            return true;
        }else{
            return false;
        }
    }
};

function entrar(){
    let email = document.getElementById("exampleInputEmail1").value;
    let pass = document.getElementById("exampleInputPassword1").value;

    let entra = usuario.validar(email,pass);
    if(entra){
        elemento.innerHTML= `
            <h1>Administración</h1>
            <p>Bienvenid@ ${usuario.name}</p>
        `;
    }

}