let body = document.querySelector('body')
let mainH1 = document.querySelector('h1')
let linksA = document.querySelectorAll('.movieLink')


let modoOscuro = confirm('¿Quiere modo Oscuro?')

if(modoOscuro){
    body.style.backgroundColor = '#7f7f7f'
    body.classList.add('fondoMoviesList')
    for (const link of linksA) {
        link.style.color = 'white'
    }
}

mainH1.innerText += 'LISTADO DE PELÍCULAS'

mainH1.style.color = 'white'
mainH1.style.backgroundColor = 'teal'
mainH1.style.padding = '20px'