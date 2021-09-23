let mainBody = document.querySelector('main')
let mainH2 = document.querySelector('h2')
let mainA = document.querySelector('a')
let mainP = document.querySelectorAll('p')
let body = document.querySelector('body')

let nombreUser = prompt('Ingrese su nombre:')

if (nombreUser){
    mainH2.innerText += ' ' + nombreUser
}else{
    mainH2.innerText += ' Invitado'
}

mainH2.style.textTransform = 'uppercase'

mainA.style.color = '#E51B3E​'

let cambiarFondo = confirm('¿Quiere cambiar fondo?')

if (cambiarFondo){
    body.classList.add('fondo')
}

for (let index = 0; index < mainP.length; index++) {
    if (index % 2 == 0){    
        mainP[index].classList.add('descatadoPar')
    }else{
        mainP[index].classList.add('descatadoimPar')
    }
    
}

mainBody.style.display = 'block'