const relogio = document.querySelector('.relogio')
const ps = document.querySelectorAll('p')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let hora = 0
let minuto = 0
let segundo = 0
function cronometro(){
    segundo += 1
    if(segundo > 59){
        minuto += 1
        segundo = 0
    }
    if(minuto > 59){
        hora += 1
        minuto = 0
    }
    return `${formartaCronometro(hora)}:${formartaCronometro(minuto)}:${formartaCronometro(segundo)}`
}
function formartaCronometro(num){
    return num >= 10 ? num : `0${num}`
}
iniciar.addEventListener('click', clicar)
function clicar(){
    const start = setInterval(function(){
        relogio.innerHTML = cronometro()
    },1000)
    iniciar.removeEventListener('click', clicar)
    ps[0].style.color = 'white'
    pausar.addEventListener('click', function(){
        clearInterval(start)
        ps[0].style.transition = 'ease-in-out, 200ms'
        ps[0].style.color = 'red'
        iniciar.addEventListener('click', clicar)
    })
    zerar.addEventListener('click', function(){
        setTimeout(function(){
            hora=0
            minuto=0
            segundo=0
            relogio.innerHTML = ''
            relogio.innerHTML = '00:00:00'
            ps[0].style.color = 'white'
            clearInterval(start)
            iniciar.addEventListener('click', clicar)
        })

    })
}
